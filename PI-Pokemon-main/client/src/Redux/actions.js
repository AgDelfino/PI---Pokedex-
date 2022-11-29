import axios from 'axios'
export const GET_ALL_POKEMONS = "GET_ALL_POKEMONS";
export const ERROR = "ERROR";
// Una action es un objeto plano con dos props : type y payload
// Redux Thunk es para poder crear actions async

export function getAllPokemons () {
  
  return function (dispatch){
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