const nameOrID = document.getElementById("name").value;

axios.get(`https://pokeapi.co/api/v2/pokemon/${nameOrID}`).then((response) => {
    pokeDisplay = response.data;
})