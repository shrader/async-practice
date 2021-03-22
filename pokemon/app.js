// pokemonArray = []

async function getPokemon(num) {
  let pokemonArray = []

  while (pokemonArray.length < num) {
    try {
    let pokemon = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${get_rand_num()}`
    );

      pokemonArray.push(pokemon);

    } catch (e) {
      console.log("pokemon not found") }
  }
  
  let pokeNames = pokemonArray.map(p => p.data.name)
  console.log(pokeNames)
}


function get_rand_num() {
  return Math.ceil(Math.random() * 151);
}

$("#pokemon-button").on("click", () => {getPokemon(3)});
