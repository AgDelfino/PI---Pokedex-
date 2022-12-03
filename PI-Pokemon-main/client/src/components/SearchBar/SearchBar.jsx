import React from "react";
import styles from '../SearchBar/SearchBar.module.css'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { resetPokemons, searchPokemon } from "../../Redux/actions";

const SearchBar = ({paginator}) => {

    const dispatch = useDispatch()
    const [search, setSearch] = useState('')

    const onChange = (e) => {
        setSearch(e.target.value);
    }

    const handlerSubmit = (e) => {
        e.preventDefault()
        dispatch(resetPokemons())
        dispatch(searchPokemon(search))
        paginator(1)
    }

    return (
        <form className={styles.form} onSubmit={handlerSubmit}>
            <input type='text' placeholder='Search your pokemon...' onChange={onChange}></input>
            <button type='submit'>SEARCH</button>
        </form>
    )
}

export default SearchBar
