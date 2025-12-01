var ejercicio7 = function () {
    document.getElementById("buscarBtn").addEventListener("click", async () => {
        const id = document.getElementById("pokemonId").value;
        const resultado = document.getElementById("resultado");

        try {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
            if (!res.ok) throw new Error("Pokemon no encontrado");
            const data = await res.json();

            const habilidades = data.abilities.map(a => a.ability.name).join(", ");

            resultado.innerHTML = `
            <div class="card">
                <img src="${data.sprites.front_default}" alt="${data.name}">
                <h3>${data.name.toUpperCase()}</h3>
                <p>ID: ${data.id}</p>
                <p>Peso: ${data.weight}</p>
                <p>Altura: ${data.height}</p>
                <p>Habilidades: ${habilidades}</p>
            </div>
            `;
        } catch (error) {
            resultado.innerHTML = `<p style="color:red;">${error.message}</p>`;
        }
    });
};

ejercicio7();

