var ejercicio9 = function () {
    document.getElementById("buscarBtn").addEventListener("click", async () => {
        const valor = document.getElementById("pokemonInput").value.trim().toLowerCase();
        const resultado = document.getElementById("resultado");

        try {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${valor}`);
            if (!res.ok) throw new Error("Pokemon no encontrado");
            const data = await res.json();

            const tipos = data.types.map(t => t.type.name).join(", ");

            resultado.innerHTML = `
            <div class="card">
                <img src="${data.sprites.front_default}" alt="${data.name}">
                <h3>${data.name.toUpperCase()}</h3>
                <p>ID: ${data.id}</p>
                <p>Tipos: ${tipos}</p>
            </div>
            `;
        } catch (error) {
            resultado.innerHTML = `<p style="color:red;">${error.message}</p>`;
        }
    });
};

ejercicio9();
