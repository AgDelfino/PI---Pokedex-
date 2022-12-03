import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../NavBar/NavBar.jsx";
import style from "./Home.module.css";
import Pokemons from "../Pokemons/Pokemons.jsx";
import Pagination from "../Pagination/Pagination.jsx";
import {
  getAllPokemons,
  getAllTypes,
  resetPokemons,
} from "../../Redux/actions";
import SearchBar from "../SearchBar/SearchBar.jsx";
import styles from "../Home/Home.module.css";
import NotFound from "../NotFound/NotFound.jsx";
import Filters from "../Filters/Filters.jsx";

const Home = () => {
  const pokemons = useSelector((state) => state.pokemons);
  const searchError = useSelector((state) => state.searchError);
  const types = useSelector((state) => state.types);
  const [filters, setFilters] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPokemons());
    dispatch(getAllTypes());
  }, []);

  const [page, setPage] = useState(1);
  const pokemonsByPage = 12;
  const lastOne = page * pokemonsByPage;
  const fistOne = lastOne - pokemonsByPage;
  const showPokemons = pokemons.slice(fistOne, lastOne);
  const paginated = (page) => {
    setPage(page);
  };

  const resetHandler = () => {
    dispatch(resetPokemons());
    dispatch(getAllPokemons());
  };

  return (
    <div>
      <NavBar />
      <div className={style.searchbar_container}>
        <button onClick={() => setFilters((state) => !state)}>ICONO</button>
        <button onClick={resetHandler}>RESET</button>
        <SearchBar paginator={paginated} />
      </div>
      <Filters filters={filters}/>
      {searchError.error ? (
        <NotFound msg={searchError.error} />
      ) : (
        <>
          <Pagination
            pokemons={pokemons.length}
            pokemonsByPage={pokemonsByPage}
            paginator={paginated}
            page={page}
          />
          <div className={style.poke_gallery}>
            <Pokemons pokes={showPokemons} />
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
