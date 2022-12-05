import React from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getPokemonsByID } from "../../Redux/actions";
import loading from '../../images/PikachuLoad.gif'

const Details = () => {
  const pokemonDetails = useSelector((state) => state.pokemonDetails);
  const dispatch = useDispatch();

  let { id } = useParams();

  useEffect(() => {
    dispatch(getPokemonsByID(id));
  }, [dispatch, id]);

  return (
    <div>
      <Link to="/pokemons">
        <button>VOLVER</button>
      </Link>
      <h1>{`HOLA SOY EL ${id}`}</h1>
      {console.log(pokemonDetails)}
      {Object.keys(pokemonDetails).length ? (
        <div>
          <img src={pokemonDetails.image} />
          <p>{pokemonDetails.name}</p>
          <p>{pokemonDetails.attack}</p>
          <p>{pokemonDetails.defense}</p>
          <p>{pokemonDetails.hp}</p>
          <p>{pokemonDetails.speed}</p>
          <p>{pokemonDetails.height}</p>
          <p>{pokemonDetails.weight}</p>
          {pokemonDetails.types && pokemonDetails.types.length ? (
            pokemonDetails.types.map((type) => {
              return <p>{type.name}</p>;
            })
          ) : (
            <p>NO TYPES</p>
          )}
        </div>
      ) : (
        <div>
          <h2>LOADING ...</h2>
          <img src={loading} alt="LOADING" />
        </div>
      )}
    </div>
  );
};

export default Details;
