import React from "react";
import { Link } from "react-router-dom";
import leftLogo from "../../images/logo_gif.png";
import style from "./NavBar.module.css";
import rightLogo from "../../images/poke_title.png";
import titleGif from "../../images/title.gif";
import { useState } from "react";
import audio from '../../audio/AtrapalosYa.mp3'
import ReactHowler from 'react-howler'

const NavBar = () => {

  const [muted, setMuted] = useState(false)

  return (
    <div className={style.nav_bar}>
      {/* <audio src={audio} autoPlay muted={muted} loop></audio> en caso de que no pueda usar Howler*/} 
      <h4>CLICK ME</h4>
      <ReactHowler src={audio} playing={muted} volume="0.3"></ReactHowler>
            <button className={style.opening} onClick={() => {
                setMuted(!muted)
            }}></button>
      <div className={style.nav_bar_container}>
        <div className={style.nav_bar_left}>
          <Link to="/">
            <img
              className={style.nav_bar_logo}
              src={leftLogo}
              alt="LeftLogo"
            ></img>
          </Link>
          <div className={style.nav_menu}>
            <ul>
              <li>
                <Link to="/pokemons">Home</Link>
              </li>
              <li>
                <Link to="/create">Create your Pokemon</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={style.nav_bar_right_container}>
          <div>
            <img className={style.pokeball} src={titleGif} alt="Pokeball" />
          </div>
          <div className={style.nav_bar_right}>
            <img className={style.pokemon} src={rightLogo} alt="Pokemon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
