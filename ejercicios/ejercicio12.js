let pokemones = [];
let currentIndex = 0;

var ejercicio12 = async function () {
    for (let i = 1; i <= 12; i++) {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const data = await res.json();
        pokemones.push({
            id: data.id,
            name: data.name,
            img: data.sprites.front_default
        });
    }
    mostrarPokemones();
};

function mostrarPokemones() {
    const contenedor = document.getElementById("pokemones");
    contenedor.innerHTML = "";

    const grupo = pokemones.slice(currentIndex, currentIndex + 3);
    grupo.forEach(p => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <img src="${p.img}" alt="${p.name}">
            <h3>${p.name.toUpperCase()}</h3>
            <p>ID: ${p.id}</p>
        `;
        contenedor.appendChild(card);
    });
}

document.getElementById("nextBtn").addEventListener("click", () => {
    if (currentIndex + 3 < pokemones.length) {
        currentIndex += 3;
        mostrarPokemones();
    }
});

document.getElementById("prevBtn").addEventListener("click", () => {
    if (currentIndex - 3 >= 0) {
        currentIndex -= 3;
        mostrarPokemones();
    }
});

ejercicio12();
