import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../NavBar/NavBar.jsx";
import style from "./Home.module.css";
import Pokemons from "../Pokemons/Pokemons.jsx";
import Pagination from "../Pagination/Pagination.jsx";
import { getAllPokemons } from "../../Redux/actions";

const Home = () => {
  const pokemons = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPokemons());
  }, [dispatch]);

  const [page, setPage] = useState(1);
  const pokemonsByPage = 12
  const lastOne = page * pokemonsByPage; // 12 / 24
  const fistOne = lastOne - pokemonsByPage; // 12 - 12 = 0 / 24 - 12 = 12
  const showPokemons = pokemons.slice(fistOne, lastOne); // 0, 12 - 12, 24
  const paginated = (page) => {
    setPage(page);
  };

  return (
    <div>
      <NavBar />
      <Pagination pokemons={pokemons.length} pokemonsByPage={pokemonsByPage} paginator={paginated} page={page}/>
      <div className={style.poke_gallery}>
        <Pokemons pokes={showPokemons}/>
      </div>
    </div>
  );
};

export default Home;
