import axios from 'axios'
export const GET_ALL_POKEMONS = "GET_ALL_POKEMONS";
export const GET_ALL_TYPES = "GET_ALL_TYPES";
export const SEARCH_POKEMON = "SEARCH_POKEMON"
export const ERROR = "ERROR";

export function getAllPokemons () {
  
  return  function (dispatch){
    axios.get('http://localhost:3001/pokemons')
    .then (response => {
      dispatch({
        type: GET_ALL_POKEMONS,
        payload: response.data
      })
    })
    .catch(error => {
      console.log("ERROR DE CONEXIÓN");
    })
  }
}

export function getAllTypes () {
  return function (dispatch){
    axios.get('http://localhost3001/types')
    .then(response => {
      dispatch({
        type: GET_ALL_TYPES,
        payload: response.data
      })
    })
    .catch(error => {
      console.log("ERROR DE CONEXIÓN");
    })
  }
}

export function searchPokemon (pokeName) {
  return function (dispatch){
    axios.get(`http://localhost3001/pokemons?name=${pokeName}`)
    .then(response => {
      dispatch({
        type: SEARCH_POKEMON,
        payload: response.data
      })
    })
  }
}
