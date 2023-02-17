import { filterData, typeSpecies, filterEpisode, typeName, resultSort } from './data.js';
import data from './data/rickandmorty/rickandmorty.js';
// data principal de interes y copia de data para sort
const dataRM = data.results;
const copiadataRM = [...data.results]//desestructurar data para sort
//elementos DOM
const reset = document.getElementById("reset");
const order = document.getElementById("order");
const episodes = document.getElementById("episodes");
const species = document.getElementById("species");
const mainGallery = document.getElementById("root");
//Presentacion total personajes

const cards = function characterGallery(data) {

  let elements = "";
  data.forEach(element => {
    elements = elements + `
  <div id="image">
  <div id="card">
  <img id="photo" src=${element.image}>
  <h1 id="tittle">${element.name}</h1>
  <p>Status: ${element.status}</p>
  <p>Gender: ${element.gender}</p>
  </div>
  </div>
  `;
  });
  return elements;
}


//filtro de personajes por especie
species.addEventListener("change", function () {

  const specie = species.value;
  const resultSpecie = filterData(dataRM, specie);

  mainGallery.innerHTML = cards(resultSpecie);
})

//console.log(cards(resultSpecie))

mainGallery.innerHTML = cards(dataRM);
//console.log(example, data);


//filtro de personajes por especie
episodes.addEventListener("change", function () {

  const episode = episodes.value;
  const resultEpisode = filterEpisode(dataRM, episode);

  console.log("result", resultEpisode);
  mainGallery.innerHTML = cards(resultEpisode);
})
mainGallery.innerHTML = cards(dataRM);

//metodo sort ordenado de A - Z
order.addEventListener("click", function () {
  const nameSort = resultSort(copiadataRM);

  mainGallery.innerHTML = cards(nameSort)
})
console.log(resultSort(copiadataRM))

//recargar pagina principal, resetear filtros
reset.addEventListener("click", function(){
  location.reload();
})