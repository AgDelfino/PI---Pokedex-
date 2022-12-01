import React from "react";
import { Link } from "react-router-dom";
import leftLogo from "../../images/logo_gif.png";
import style from './NavBar.module.css'
import rightLogo from '../../images/poke_title.png'
import titleGif from '../../images/title.gif'

const NavBar = () => {
  return (
    <div className={style.nav_bar}>
      <div className={style.nav_bar_container}>
        <div className={style.nav_bar_left}>
            <Link>
                <img className={style.nav_bar_logo} src={leftLogo} alt='LeftLogo'></img>
            </Link>
            <div className={style.nav_menu}>
                <ul>
                    <li>
                        <Link to='/pokemons'>Home</Link>
                    </li>
                    <li>
                        <Link to='/create'>Create your Pokemon</Link>
                    </li>
                    <li>
                        <Link to='/about'>About Us</Link>
                    </li>
                </ul>
            </div>
        </div>
        <div className={style.nav_bar_right}>
            <img className={style.pokeball} src={titleGif} alt='Pokeball'/>
            <img className={style.pokemon} src={rightLogo} alt='Pokemon'/>
        </div>
      </div>
    </div>
  );
};

export default NavBar;