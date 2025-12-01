var ejercicio6 = async function () {
    try {
        var id = Math.floor(Math.random() * 898) + 1;
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await res.json();
        console.log("Pokemon: ", data.name, " (ID:", id + ")");
    } catch (err) {
        console.error("Error: ", err);
    }
};

ejercicio6();

