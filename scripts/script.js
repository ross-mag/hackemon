const pokemonName = document.getElementById("name").value;
const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`

const pokemonForm = document.getElementById("pokemonForm");
const submitButton = document.getElementById("submit");
const pokemonInfoList = document.querySelector(".pokemon-info__list");

pokemonForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const pokemonName = document.getElementById("name").value;
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
    axios
        .get(url)
        .then((response) => {
            let pokemonData = response.data;
            console.log(pokemonData);
            displayPokemon(event, pokemonData);
        })
        .catch((error) => {
            console.log(error);
        })
});

function displayPokemon(event, pokemonData) {
    event.preventDefault();
    console.log(event.target.name.value)

    pokemonInfoList.innerHTML = "";

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

    const moves = document.createElement("li");
    moves.innerHTML = `<label>Moves:</label> ${pokemonData.moves
        .map((move) => move.move.name)}`;

    pokemonInfoList.appendChild(id);
    pokemonInfoList.appendChild(name);
    pokemonInfoList.appendChild(baseExperience);
    pokemonInfoList.appendChild(weight);
    pokemonInfoList.appendChild(height);
    pokemonInfoList.appendChild(abilities);
    pokemonInfoList.appendChild(moves);
}
