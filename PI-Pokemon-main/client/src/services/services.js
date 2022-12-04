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
