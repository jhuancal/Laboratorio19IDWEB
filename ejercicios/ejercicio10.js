var ejercicio10 = async function () {
    try {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon/mewtwo");
        const data = await res.json();

        const lista = data.stats.map(s => `<li>${s.stat.name}: ${s.base_stat}</li>`).join("");

        document.getElementById("resultado").innerHTML = `
        <div class="card">
            <h3>${data.name.toUpperCase()}</h3>
            <ul>${lista}</ul>
        </div>
        `;
    } catch (error) {
        console.error("Error:", error);
    }
};

ejercicio10();

