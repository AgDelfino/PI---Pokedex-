import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../NavBar/NavBar.jsx";
import style from './Home.module.css'
import Pokemons from "../Pokemons/Pokemons.jsx";
import { getAllPokemons } from "../../Redux/actions";

const Home = () => {

    const pokemons = useSelector(state => state.pokemons)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllPokemons())
    }, [dispatch])
    
    return (
        <div>
            <NavBar/>
            <div className={style.poke_gallery}>
                <Pokemons pokes={pokemons}/>
            </div>
        </div>
       
    )
}

export default Home;