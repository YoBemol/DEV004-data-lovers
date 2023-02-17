// Filtro por especies

export const filterData = (data, value) => {
  const filterSpecies = data.filter(data => data.species == value);
  //console.log(filterSpecies);
  return filterSpecies;
};

//Para conocer todos los tipos de especies
export const typeSpecies = (data) => {
  let kindSpecie = data.map(data => data.species);
  return kindSpecie;
}

//filtro por episodios
export const filterEpisode = (data, value) => {
  const kindEpisode = data.filter(data => data.episode.includes(value));
  //console.log(filterSpecies);
  return kindEpisode;
};
//mapea nombres y los convierte a string no funciona para este ejercicio
export const typeName = (data) => {
  return data.map(data => data.name)
              .sort()
};


//ordenando el array mapeado que contiene los valores reducidos
export const resultSort = (data) => {
  data.sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    return 0;// no funciona return 0 ni return typeName aqui
  })
  return data;
}

/*export const anotherExample = () => {
  return 'OMG';
};


 function filterData (data, condition){

 }

 function sortData (data, sortBy, sortOrder){

 }

 function computeStats(data){

 }*/
