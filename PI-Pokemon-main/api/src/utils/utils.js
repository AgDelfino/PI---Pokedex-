const axios = require("axios");
const { Pokemon, Type } = require("../db");
let newAxios = axios.create({
  headers: {
    "Accept-Encoding": "null",
  },
});

async function getApiPokemons() {
  let pokemonsApi = [];

  await newAxios
    .get("https://pokeapi.co/api/v2/pokemon?limit=40")
    .then(async (response) => {
      let arrResults = response.data.results;
      let arrPromises = [];
      arrResults.map((p) => arrPromises.push(newAxios.get(p.url)));

      await Promise.all(arrPromises)
        .then((pokemons) => {
          pokemonsApi = pokemons.map((p) => {
            return {
              id: p.data.id,
              name: p.data.name,
              image: p.data.sprites.other.dream_world.front_default,
              hp: p.data.stats[0].base_stat,
              attack: p.data.stats[1].base_stat,
              defense: p.data.stats[2].base_stat,
              speed: p.data.stats[5].base_stat,
              height: p.data.height,
              weight: p.data.weight,
              type: p.data.types.map((t) => {
                return {
                  name: t.type.name,
                };
              }),
            };
          });
        })
        .catch((error) => {
          return error;
        });
    })
    .catch((error) => {
      return error;
    });
  console.log(pokemonsApi);
  return pokemonsApi;
}

async function getDbPokemons() {
  try {
    const arrDbPokemons = await Pokemon.findAll({
      include: {
        attributes: ["name"],
        model: Type,
        through: {
          attributes: [],
        },
      },
    });
    return arrDbPokemons;
  } catch (error) {
    return error;
  }
}

async function getAllPokemon() {
  try {
    let apiPokemons = await getApiPokemons();
    let dbPokemons = await getDbPokemons();
    return apiPokemons.concat(dbPokemons);
  } catch (error) {}
}

async function getPokemonById(id) {
  try {
    let idResult = await newAxios.get(
      `https://pokeapi.co/api/v2/pokemon/${id}`
    );
    if (idResult) {
      let p = idResult;

      return {
        id: p.data.id,
        name: p.data.name,
        image: p.data.sprites.other.dream_world.front_default,
        hp: p.data.stats[0].base_stat,
        attack: p.data.stats[1].base_stat,
        defense: p.data.stats[2].base_stat,
        speed: p.data.stats[5].base_stat,
        height: p.data.height,
        weight: p.data.weight,
        types: p.data.types.map((t) => {
          return { name: t.type.name };
        }),
      };
    } else {
      return null;
    }
  } catch (error) {
    return error;
  }
}

module.exports = {
  getApiPokemons,
  getDbPokemons,
  getAllPokemon,
  getPokemonById,
};
