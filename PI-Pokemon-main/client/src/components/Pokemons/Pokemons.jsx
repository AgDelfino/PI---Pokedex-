import Pokemon from "../Pokemon/Pokemon.jsx";
import styles from "./Pokemons.module.css";
import { Link } from "react-router-dom";

const Pokemons = ({ pokes }) => {
  return (
    <div className={styles.container_cards}>
      {
        (pokes.length === 0){
           
        }
      }
    </div>
  );
};

export default Pokemons;


{/* <div>
            <Link key={pokemon.id}to={`/pokemons/${pokemon.id}`}>
              <Pokemon
                name={pokemon.name}
                image={pokemon.image}
                attack={pokemon.attack}
                type={pokemon.type}
                id={pokemon.id}
              />
            </Link>
          </div> */}