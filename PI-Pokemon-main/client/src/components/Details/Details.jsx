import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getPokemonsByID, resetDetails } from "../../Redux/actions";
import loading from "../../images/PikachuLoad.gif";
import NavBar from "../NavBar/NavBar";
import styles from "./Details.module.css";
import ash from "../../images/ash.png";

const Details = () => {
  const pokemonDetails = useSelector((state) => state.pokemonDetails);
  const dispatch = useDispatch();

   let { id } = useParams();

  useEffect(() => {
    dispatch(getPokemonsByID(id));
    return () => {
      dispatch(resetDetails())
    }
  }, []);

  useEffect(() => {
    console.log(pokemonDetails);
  }, [pokemonDetails])

  return (
    <div>
      <NavBar />
      { pokemonDetails ? 
        <>
      <h1 className={styles.title}>{`Hello I'm ${pokemonDetails.name}`}</h1>
      <div className={styles.flex}>
        <img className={styles.ash} src={ash} alt="Ash" />
        <div className={styles.main_container}>
          <img className={styles.poke_img} src={pokemonDetails.image} />
          <div className={styles.stats_container}>
            <span
              className={styles.stats}
            >{`Atack: ${pokemonDetails.attack}`}</span>
            <span
              className={styles.stats}
            >{`Defense: ${pokemonDetails.attack}`}</span>
            <span
              className={styles.stats}
            >{`HP: ${pokemonDetails.attack}`}</span>
            <span
              className={styles.stats}
            >{`Speed: ${pokemonDetails.attack}`}</span>
            <span
              className={styles.stats}
            >{`Height: ${pokemonDetails.attack}`}</span>
            <span
              className={styles.stats}
            >{`Weight: ${pokemonDetails.attack}`}</span>
        
          </div>
          <div className={styles.types_container}>
            {/* <img src={`../../images/typesIcons/${pokemonDetails.types[0].name}`} alt={pokemonDetails.types[0].name} />
            <img src={`../../images/typesIcons/${pokemonDetails.types[1].name}`}  alt={pokemonDetails.types[1].name}/> */}
          </div>
        </div>
      </div>
      </> :
      <h3>LOADING</h3>
      }
    </div>
  );
};

export default Details;
