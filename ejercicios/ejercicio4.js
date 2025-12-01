var ejercicio4 = function () {
    fetch("https://pokeapi.co/api/v2/pokemon/charizard")
        .then(res => res.json())
        .then(data => {
            console.log("URL: ", data.sprites.front_default);
        })
    .catch(err => console.error("Error: ", err));
};

ejercicio4();







