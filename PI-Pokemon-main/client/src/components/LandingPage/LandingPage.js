import React from "react";
import style from './LandingPage.module.css'
import { Link } from "react-router-dom";
import pokedex from '../../images/pokedex.png'

const LandingPage = () => {
    return (
        <div className={style.lading_container}>
            <div className={style.container}>    
            <h1 className={style.title}>Welcome to your</h1>
            </div>
            <div className={style.container}>
                <img className={style.landing_img} src={pokedex} alt='Pokedex'/> 
            </div>
            <Link to='/pokemons'>
                <button className={style.landing_button}>Let's Go</button>
            </Link>
        </div>
    )
}

export default LandingPage;