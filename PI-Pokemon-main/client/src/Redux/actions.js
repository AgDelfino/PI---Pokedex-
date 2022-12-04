import axios from "axios";
export const GET_ALL_POKEMONS = "GET_ALL_POKEMONS";
export const GET_ALL_TYPES = "GET_ALL_TYPES";
export const SEARCH_POKEMON = "SEARCH_POKEMON";
export const ERROR = "ERROR";
export const SEARCH_ERROR = "SEARCH_ERROR";
export const RESET_POKEMONS = "RESET_POKEMONS";
export const FILTER_ERROR = "FILTER_ERROR"


export function getAllPokemons() {
  return function (dispatch) {
    axios
      .get("http://localhost:3001/pokemons")
      .then((response) => {
        dispatch({
          type: GET_ALL_POKEMONS,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log("ERROR DE CONEXIÓN");
      });
  };
}

export function getAllTypes() {
  return function (dispatch) {
    axios
      .get("http://localhost:3001/types")
      .then((response) => {
        dispatch({
          type: GET_ALL_TYPES,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log("ERROR DE CONEXIÓN");
      });
  };
}

export function searchPokemon(pokeName) {
  return function (dispatch) {
    axios
      .get(`http://localhost:3001/pokemons?name=${pokeName}`)
      .then((response) => {
        dispatch({
          type: SEARCH_POKEMON,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
        dispatch({
          type: SEARCH_ERROR,
          payload: error.response.data,
        });
      });
  };
}

export function resetPokemons() {
  return {
    type: RESET_POKEMONS,
    payload: [],
  };
}

export function setFilterError (error) {
  return {
    type: FILTER_ERROR,
    payload: error,
  }
}
