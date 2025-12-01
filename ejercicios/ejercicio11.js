var ejercicio11 = function () {
    document.getElementById("buscarBtn").addEventListener("click", async () => {
        const valor = document.getElementById("pokemonInput").value.trim().toLowerCase();
        const resultado = document.getElementById("resultado");

        try {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${valor}`);
            if (!res.ok) throw new Error("Pokemon no encontrado");
            const data = await res.json();

            let filas = "";
            data.stats.forEach(stat => {
                filas += `<tr><td>${stat.stat.name}</td><td>${stat.base_stat}</td></tr>`;
            });

            resultado.innerHTML = `
            <div class="card">
                <h3>${data.name.toUpperCase()}</h3>
                <table>
                ${filas}
                </table>
            </div>
            `;
        } catch (error) {
            resultado.innerHTML = `<p style="color:red;">${error.message}</p>`;
        }
    });
};

ejercicio11();
