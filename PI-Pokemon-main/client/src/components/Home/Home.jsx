import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../NavBar/NavBar.jsx";
import styles from "./Home.module.css";
import Pokemons from "../Pokemons/Pokemons.jsx";
import Pagination from "../Pagination/Pagination.jsx";
import {
  getAllPokemons,
  getAllTypes,
  resetPokemons,
  setFilterError,
} from "../../Redux/actions";
import SearchBar from "../SearchBar/SearchBar.jsx";
import NotFound from "../NotFound/NotFound.jsx";
import Filters from "../Filters/Filters.jsx";
import { filterPokemons } from "../../services/services.js";

const Home = () => {
  const pokemonsGlobal = useSelector((state) => state.pokemons);
  const [pokemons, setPokemons] = useState([]);
  const searchError = useSelector((state) => state.searchError);
  const [filters, setFilters] = useState({
    active: false,
    typeFilter: ["", ""],
  });
  const filterError = useSelector((state) => state.filterError);

  const dispatch = useDispatch();

  useEffect(() => {
    setPokemons([...pokemonsGlobal]);
  }, [pokemonsGlobal]);

  useEffect(() => {
    if (filters.active) return;
    dispatch(getAllPokemons());
    dispatch(getAllTypes());
  }, []);

  useEffect(() => {
    try {
      const newPokemons = filterPokemons(pokemonsGlobal, filters);
      setPokemons(newPokemons);
      dispatch(setFilterError({}))
    } catch (error) {
      dispatch(setFilterError(error));
    }
  }, [filters]);

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
      <div className={styles.searchbar_container}>
        <button onClick={resetHandler}>RESET</button>
        <SearchBar paginator={paginated} />
        <button
          className={styles.filters_button}
          onClick={() =>
            setFilters((state) => ({ ...state, active: !state.active }))
          }
        >
          ICONO
        </button>
      </div>
      <Filters
        filters={filters}
        setFilters={setFilters}
        paginator={paginated}
      />
      {searchError.error || filterError.error ? (
        <NotFound msg={searchError.error || filterError.error} />
      ) : (
        <>
          <Pagination
            pokemons={pokemons.length}
            pokemonsByPage={pokemonsByPage}
            paginator={paginated}
            page={page}
          />
          <div className={styles.poke_gallery}>
            <Pokemons pokes={showPokemons} />
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
