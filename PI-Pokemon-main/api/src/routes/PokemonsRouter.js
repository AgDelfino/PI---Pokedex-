const { Router } = require("express");
const {
  getApiPokemons,
  getDbPokemons,
  getAllPokemon,
  getPokemonById,
} = require("../utils/utils");
const {Pokemon, Type} = require('../db')

const PokemonsRouter = Router();

PokemonsRouter.get("/api", async (req, res) => {
  try {
    let apiPokemons = await getApiPokemons();
    res.send(apiPokemons);
  } catch (error) {
    res.send({ error: error.message });
  }
});

PokemonsRouter.get("/db", async (req, res) => {
  try {
    let apiPokemons = await getDbPokemons();
    res.send(apiPokemons);
  } catch (error) {
    res.send({ error: error.message });
  }
});

PokemonsRouter.get("/", async (req, res) => {
  try {
    let allPokemons = await getAllPokemon();
    res.send(allPokemons);
  } catch (error) {
    res.send({ error: error.message });
  }
});

PokemonsRouter.get('/:id', async(req, res) => {
    try {
        let id = req.params
        let idPokemon = await getPokemonById(id);
        res.send(idPokemon)
    } catch (error) {
        res.status(404).send({error: error.message})
    }
})

PokemonsRouter.post("/", async (req, res) => {
  try {
    const { name, hp, attack, defense, speed, height, weight, types } =
      req.body;

    if (
      !name ||
      !hp ||
      !attack ||
      !defense ||
      !speed ||
      !height ||
      !weight ||
      !types
    ) {
      return res.status(404).send({ error: "All fields are required" });
    }
    const newPokemon = await Pokemon.create({
      name,
      hp: parseInt(hp),
      attack: parseInt(attack),
      defense: parseInt(defense),
      speed: parseInt(speed),
      height: parseInt(height),
      weight: parseInt(weight),
      
    });
    const typesDb = await Type.findAll({ where: { name: types } });
    newPokemon.addType(typesDb);
    res.send(newPokemon)
  } catch (error) {
    res.status(404).send({error: error.message})
  }
});


module.exports = PokemonsRouter;
