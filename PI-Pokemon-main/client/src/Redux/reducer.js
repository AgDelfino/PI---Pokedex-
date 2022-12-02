import {
  GET_ALL_POKEMONS,
  ERROR,
  GET_ALL_TYPES,
  SEARCH_POKEMON,
} from "./actions";

const initialState = {
  pokemons: [],
  pokemonFound: {},
  error: {},
  types: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
      };
    case GET_ALL_TYPES:
      return {
        ...state,
        types: action.payload,
      };
    case SEARCH_POKEMON:
      return {
        ...state,
        pokemonFound: action.payload,
      };
    case ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return { ...state };
  }
}
