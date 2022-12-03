import {
  GET_ALL_POKEMONS,
  SEARCH_ERROR,
  GET_ALL_TYPES,
  SEARCH_POKEMON,
  RESET_POKEMONS,
} from "./actions";

const initialState = {
  pokemons: [],
  searchError: {},
  types: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
        searchError: {},
      };
    case GET_ALL_TYPES:
      return {
        ...state,
        types: action.payload,
      };
    case SEARCH_POKEMON:
      return {
        ...state,
        pokemons: [action.payload],
        searchError: {},
      };
    case SEARCH_ERROR:
      return {
        ...state,
        searchError: action.payload,
      };
    case RESET_POKEMONS: 
    return {
      ...state,
      pokemons: action.payload
    }
    default:
      return { ...state };
  }
}
