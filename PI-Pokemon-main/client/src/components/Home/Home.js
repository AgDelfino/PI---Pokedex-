import React, {useEffect} from  'react'
import {useDispatch, useSelector} from 'react-redux'
import { getAllPokemons } from '../../Redux/actions'
import Pokemon from '../Pokemon/Pokemon'


const Home = () => {
    const dispatch = useDispatch()
    const pokemons = useSelector(state=> state.pokemons)

    useEffect(() => {
        dispatch(getAllPokemons())
    }, [dispatch])
   
    if(pokemons.length) {
        return (
            <>
                {pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon }/>) }
            </>
        )
    }else {
        return (
            <>
                <h3>LOADING</h3>
            </>
        )
    }

    }
    
    export default Home;