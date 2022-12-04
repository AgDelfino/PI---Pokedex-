import Pokemon from "../Pokemon/Pokemon.jsx";
import styles from "./Pokemons.module.css";
import { Link } from "react-router-dom";
import loading from '../../images/PikachuLoad.gif'

const Pokemons = ({ pokes }) => {

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
              type={pokemon.type || pokemon.types}
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


