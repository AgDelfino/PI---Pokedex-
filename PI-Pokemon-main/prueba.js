const arrPokemons = [
    {
        name: "Pikachu",
        atk: 200,
        types: [
            {name: "electric"}
        ]
    },
    {
        name: "Charmander",
        atk: 200,
        types: [
            {name: "fire"},
        ]
    },
    {
        name: "Charizard",
        atk: 200,
        types: [
            {name: "fire"},
            {name: "Flying"}
        ]
    },
    {
        name: "Dragonite",
        atk: 200,
        types: [
            {name: "dragon"},
            {name: "flying"}
        ]
    },
]

const filterPokemons = (pokemons, type) => {
   let filteredPokemons = pokemons.filter((pokemon) => {
      return pokemon.types.find((t) => t.name === type) && pokemon.types.length === 1
    })
    return filteredPokemons
}

console.log(filterPokemons(arrPokemons, "fire"));

