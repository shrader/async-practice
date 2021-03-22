const $cardGroup = $('.card-group');
// const $img1 = $('#img1');
// const $img2 = $('#img2');
// const $img3 = $('#img3');
// const $text1 = $('#text1');
// const $text2 = $('#text2');
// const $text3 = $('#text3');
// const $title1 = $('#title1');
// const $title2 = $('#title2');
// const $title3 = $('#title3');


async function getPokemon(num) {
  let pokemonArray = []
  $cardGroup.html('');

  while (pokemonArray.length < num) {
    try {
    let pokemon = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${get_rand_num()}`
    );

      pokemonArray.push(pokemon);

    } catch (e) {
      console.log("pokemon not found") }
  }

  console.log(pokemonArray);
  let pokeSpecies = pokemonArray.map(p => p.data.species)
  let nameAndFlavorText = await getFlavorText(pokeSpecies);
  

  for (let index in pokemonArray) {
    let img = pokemonArray[index].data.sprites.front_default;
    let name = nameAndFlavorText[index][0];
    let flavorText = nameAndFlavorText[index][1];

    $cardGroup.append(`<div class="card">
    <img  src="${img}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title" >${name}</h5>
      <p class="card-text" > ${flavorText}</p>
    </div>`);



  }

  //console.log(pokeNames)

  
}

async function getFlavorText(arr) {
  let pokemonData = await Promise.all( arr.map(obj => axios.get(`${obj.url}`)))
  let flavorText = pokemonData.map(function (val) {
    return [val.data.name ,val.data.flavor_text_entries[0].flavor_text]
  })
  return flavorText
}

function get_rand_num() {
  return Math.ceil(Math.random() * 151);
}

$("#pokemon-button").on("click", () => {getPokemon(3)});
