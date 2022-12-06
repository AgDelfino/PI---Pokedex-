import axios from "axios";

export function filterPokemons(pokemons, { typeFilter }) {
      
  if (!typeFilter[0] && !typeFilter[1]) {
    return [...pokemons];
  }
  if (typeFilter[0] && typeFilter[1]) {
    const sortedFilters = typeFilter.sort()
    const filteredPokemons = pokemons.filter((pokemon) => {
      let sortedType = pokemon.type?.map(t => t.name).sort()
      if(!sortedType) {
        sortedType = pokemon.types?.map(t => t.name).sort()
      }

      if (sortedFilters[0] === sortedType[0] && sortedFilters[1] === sortedType[1]) {
        return pokemon;
      }
    });
    if(!filteredPokemons.length) {
      throw {error: "FILTERS DIDN'T MATCH ANY RESULTS "}
    }
    return filteredPokemons
  }
  if (typeFilter[0] && !typeFilter[1]) {
    const filteredPokemons = pokemons.filter((pokemon) => {
      const hasFilterType = pokemon.type?.find((t) => t.name === typeFilter[0]);
      const hasFilterTypes = pokemon.types?.find(
        (t) => t.name === typeFilter[0]
      );

      if (hasFilterType || hasFilterTypes) {
        return pokemon;
      }
    });
    if(!filteredPokemons.length) {
      throw {error: "FILTERS DIDN'T MATCH ANY RESULTS "}
    }
    return filteredPokemons
  }

  if (!typeFilter[0] && typeFilter[1]) {
    const filteredPokemons = pokemons.filter((pokemon) => {
      const hasFilterType = pokemon.type?.find((t) => t.name === typeFilter[1]);
      const hasFilterTypes = pokemon.types?.find(
        (t) => t.name === typeFilter[1]
      );

      if (hasFilterType || hasFilterTypes) {
        return pokemon;
      }
    });
    if(!filteredPokemons.length) {
      throw {error: "FILTERS DIDN'T MATCH ANY RESULTS "}
    }
    return filteredPokemons
  }
}

export function sortPokemons (pokemons, {sortFilter}){
    if(sortFilter === "A-Z"){
      return [...pokemons].sort((a,b) => a.name.localeCompare(b.name))
    }
    if(sortFilter === "Z-A"){
      return [...pokemons].sort((a,b) => b.name.localeCompare(a.name))
    }
    if(sortFilter === "ATK+"){
      return [...pokemons].sort((a,b) => a.attack-b.attack)
    }
    if(sortFilter === "ATK-"){
      return [...pokemons].sort((a,b) => b.attack-a.attack)
    }
}

export function filterPokemonsApiOrDb (pokemons, {filterApiOrDb}) {
    if(filterApiOrDb === 'DB'){
      return [...pokemons].filter(poke => isNaN(poke.id))
    }
    if(filterApiOrDb === 'API'){
      return [...pokemons].filter(poke => !isNaN(poke.id))
    }
    if(filterApiOrDb === 'ALL'){
      return [...pokemons]
    }
}

export function validateForm (input) {

    if(input.name > 20) {
      throw "Max characters exceeded"
    }

    const numValues = Object.values(input).slice(1, -1)
    if(!numValues.every(value => value < 1000  && value  != 0 && !isNaN(value))) {
      throw "INVALID VALUES"
    }
    return "POKEMON CREATED"
  } 

export async function sendForm (input) {
  const send = await axios.post('http://localhost:3001/pokemons', input)
}
