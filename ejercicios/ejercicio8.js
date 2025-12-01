var ejercicio8 = async function () {
    const contenedor = document.getElementById("pokemones");

    for (let i = 1; i <= 10; i++) {
        try {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
            const data = await res.json();

            const card = document.createElement("div");
            card.className = "card";
            card.innerHTML = `
                <img src="${data.sprites.front_default}" alt="${data.name}">
                <h3>${data.name.toUpperCase()}</h3>
                <p>ID: ${data.id}</p>
            `;
            contenedor.appendChild(card);
        } catch (error) {
            console.error("Error:", error);
        }
    }
};

ejercicio8();
