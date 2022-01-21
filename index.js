
const numeroDePokemon=document.getElementById('')
const pokemonContainer = document.querySelector(".pokemon-container");
let hasta = 0;
let desde = parseInt(prompt("ingresa el numero de pokemon que  quieres ver"));
function Pokemon(id) {
  
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`) // traer POKEMON DE API
    .then((respuesta) => respuesta.json()) //El método  then devuelve una  Promise que permite encadenar métodos
    .then((dato) => 
    {
      createPokemon(dato);
      spinner.style.display = "none";
    });
}
function Pokemones(desde, hasta) {
  spinner.style.display = "block";
  for (let i = desde; i <= desde + hasta; i++) {
    Pokemon(i);
  }
}
//TARJETAS 
function createPokemon(pokemon) {
  const flipCard = document.createElement("div");
  flipCard.classList.add("flip-card");

  const cardContainer = document.createElement("div");
  cardContainer.classList.add("card-container");

  flipCard.appendChild(cardContainer);

  const card = document.createElement("div");
  card.classList.add("pokemon-block");

  const spriteContainer = document.createElement("div"); //SPRITEC : CONTIENE LA IMAGEN
  spriteContainer.classList.add("img-container");

  const sprite = document.createElement("img");
  sprite.src = pokemon.sprites.front_default; //url desde api

  spriteContainer.appendChild(sprite);

  const number = document.createElement("p");
  number.textContent = `${pokemon.id.toString().padStart(0, 0)}`;

  const name = document.createElement("p");
  name.classList.add("name");
  name.textContent = pokemon.name;
  
  const height = document.createElement("p");
  height.classList.add("height");
  height.textContent = pokemon.height;
  height.textContent = `Altura:${pokemon.height.toString()}`;
  
  const weight = document.createElement("p");
  weight.classList.add("weight");
  weight.textContent = pokemon.weight;
  weight.textContent = `Peso:${pokemon.weight.toString()}`;

  card.appendChild(spriteContainer); // appendChild :inserta un nuevo nodo dentro de la estructura DOM de un documento
  card.appendChild(number);
  card.appendChild(name);
  card.appendChild(height);
  card.appendChild(weight);

  
  const cardBack = document.createElement("div");
  cardBack.classList.add("pokemon-block-back");

  cardBack.appendChild(progressBars(pokemon.stats));

  cardContainer.appendChild(card);
  cardContainer.appendChild(cardBack);
  pokemonContainer.appendChild(flipCard);
}

function progressBars(stats) {
  const statsContainer = document.createElement("div");
  statsContainer.classList.add("stats-container");
  return statsContainer;
}

function removeChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

Pokemones(desde, hasta);