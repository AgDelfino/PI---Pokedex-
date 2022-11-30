import { GET_ALL_POKEMONS, ERROR } from "./actions";


const initialState = {
    pokemons: [],
    filteredPokemons: [],
    error: {},
}

export default function rootReducer (state=initialState, action) {
    switch (action.type) {
        case GET_ALL_POKEMONS:
            return {
                ...state,
                pokemons: action.payload,
            }
        case ERROR: 
        return {
            ...state,
            error: action.payload
        }
        default:
          return {...state}
    }
}

