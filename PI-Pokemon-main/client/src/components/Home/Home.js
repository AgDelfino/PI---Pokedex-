import React from "react";
import { useSelector } from "react-redux";
import NavBar from "../NavBar/NavBar";
import style from './Home.module.css'
import Pokemons from "../Pokemons/Pokemons";

const Home = () => {

    const pokemons = useSelector(state => state.pokemons)
    
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