import React, { useEffect } from "react";
import Pokemon from "../Pokemon/Pokemon";
import {useSelector} from 'react-redux';
import { useDispatch } from "react";
import { getAllPokemons } from "../../Redux/actions";
import style from './Pokemons.module.css'
import { Link } from "react-router-dom";

const Pokemons = ({pokes}) => {

    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(getAllPokemons())
    }, [])

    if(pokes.length){
       {
        pokes.map((pokemon) => {
            return (
                <Link to={`/pokemons/${pokemon.id}`}>
                    <Pokemon 
                     id={pokemon.id}
                     name={pokemon.name}
                     image={pokemon.image}
                     attack={pokemon.attack}
                     types={pokemon.types}
                     key={pokemon.id}/>
                </Link>
            )
        })
       }
    }
}

export default Pokemons;
