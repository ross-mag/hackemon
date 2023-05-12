const pokemonName = document.getElementById("name").value;

const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`

const pokemonInfo__list = document.querySelector(".pokemon-container");

pokemon = [];

function displayPokemon() {
    pokemonInfo__list.innerHTML = "";

    const id = document.createElement("li");
    id.innerHTML = `<label>ID:</label> ${pokemonData.id}`;
    
    const name = document.createElement("li");
    name.innerHTML = `<label>Name:</label> ${pokemonData.name}`;

    const baseExperience = document.createElement("li");
    baseExperience.innerHTML = `<label>Base Experience:</label> ${pokemonData.base_experience}`;

    const weight = document.createElement("li");
    weight.innerHTML = `<label>Weight:</label> ${pokemonData.weight} kg`;

    const height = document.createElement("li");
    height.innerHTML = `<label>Height:</label> ${pokemonData.height} m`;

    const abilities = document.createElement("li");
    abilities.innerHTML = `<label>Abilities:</label> ${pokemonData.abilities
    .map((ability) => ability.ability.name)}`;
    // .join(", ")}`;

    const moves = document.createElement("li");
    moves.innerHTML = `<label>Moves:</label> ${pokemonData.moves
    .map((move) => move.move.name)}`;
    // .slice(0, 5)
    // .join(", ")}`;

    pokemonInfo__list.appendChild(id);
    pokemonInfo__list.appendChild(name);
    pokemonInfo__list.appendChild(baseExperience);
    pokemonInfo__list.appendChild(weight);
    pokemonInfo__list.appendChild(height);
    pokemonInfo__list.appendChild(abilities);
    pokemonInfo__list.appendChild(moves);
}

axios.get(url)
.then((response) => {
    pokemonData = response.data;
    displayPokemon();
})
.catch((error) => {
    console.log(error);
})