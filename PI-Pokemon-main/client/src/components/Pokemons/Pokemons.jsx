import Pokemon from "../Pokemon/Pokemon.jsx";
import styles from "./Pokemons.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import loading from '../../images/PikachuLoad.gif'

const Pokemons = ({ pokes }) => {

  let currentPage = parseInt(useSelector((state) => state.currentPage))
  let totalPokemons = parseInt(useSelector((state)=> state.totalPokemons))
  let itemsByPage = parseInt(useSelector((state) => state.itemsByPage))


  let start = (currentPage - 1) * itemsByPage
  let end = start + itemsByPage
  if(end > totalPokemons) end = totalPokemons
  if(start < 0) start = 0
  

  return (
    <div className={styles.container_cards}>
      {
      (pokes.length) ?
      pokes.map((pokemon) => {
        return (
          <Link to={`/pokemons/${pokemon.id}`} key={pokemon.id}>
            <Pokemon
              id={pokemon.id}
              name={pokemon.name}
              attack={pokemon.attack}
              image={pokemon.image}
              type={pokemon.type}
            />
          </Link>
        );
      }) :
      <div>
      <h2>LOADING ...</h2>
      <img src={loading} alt="LOADING"/>
      </div>
      }
    </div>
  );
};

export default Pokemons;


