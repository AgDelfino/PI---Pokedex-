import React from "react";
import { useSelector } from "react-redux";
import styles from "./Filters.module.css";

const Filters = ({ filters, setFilters, paginator }) => {
  const types = useSelector((state) => state.types);

 const apiOrDbHandler = (e) => {
   const filter = e.target.id
   if(filters.filterApiOrDb === filter){
    return setFilters((state) => {
      return {
        ...state,
        filterApiOrDb: '',
      }
    })
   }
   setFilters((state) => {
    return {
      ...state, 
      filterApiOrDb: filter
    }
   })
 }

  const sortHandler = (e) => {
    const sort = e.target.id;

    if (filters.sortFilter === sort) {
      return setFilters((state) => {
        return {
          ...state,
          sortFilter: "",
        };
      });
    }
    setFilters((state) => {
      return {
        ...state,
        sortFilter: sort,
      };
    });
  };

  const typeHandler = (e) => {
    const type = e.target.id;
    const arrTypes = ["", ""];
    paginator(1);

    if (filters.typeFilter.find((f) => f === type)) {
      console.log(filters.typeFilter);
      return setFilters((state) => ({
        ...state,
        typeFilter: state.typeFilter.filter((t) => t !== type).concat(""),
      }));
    }

    if (filters.typeFilter[0] && filters.typeFilter[1]) {
      return;
    }
    if (!filters.typeFilter[0] && !filters.typeFilter[1]) {
      setFilters((state) => ({ ...state, typeFilter: [type, ""] }));
    }
    if (filters.typeFilter[0] && !filters.typeFilter[1]) {
      arrTypes[0] = filters.typeFilter[0];
      arrTypes[1] = type;
      setFilters((state) => ({ ...state, typeFilter: arrTypes }));
    }
    if (!filters.typeFilter[0] && filters.typeFilter[1]) {
      arrTypes[0] = type;
      arrTypes[1] = filters.typeFilter[1];
      setFilters((state) => ({ ...state, typeFilter: arrTypes }));
    }
  };

  return (
    <div
      className={`${styles.main_container} ${
        filters.active ? styles.activeFilters : null
      }`}
    >
      <div className={styles.filters_container}>
        <h3 className={styles.title_type}>Filter by Type</h3>
        {types.map((type, index) => {
          return (
            <button
              key={index}
              id={type.name}
              className={`${styles[type.name]} ${styles.type_buttons} ${
                filters.typeFilter.find((f) => f === type.name)
                  ? styles.active_type
                  : null
              }`}
              onClick={typeHandler}
            />
          );
        })}
      </div>
      <h3 className={styles.title_type}>Order by: </h3>
      <div className={styles.sort_buttons_container}>
        <button
          className={`${styles.sort_button} ${
            filters.sortFilter === "A-Z" ? styles.sort_active : null
          }`}
          id="A-Z"
          onClick={sortHandler}
        >
          A-Z
        </button>
        <button
          className={`${styles.sort_button} ${
            filters.sortFilter === "Z-A" ? styles.sort_active : null
          }`}
          id="Z-A"
          onClick={sortHandler}
        >
          Z-A
        </button>
        <button
          className={`${styles.sort_button} ${
            filters.sortFilter === "ATK-" ? styles.sort_active : null
          }`}
          id="ATK-"
          onClick={sortHandler}
        >
          Mayor ATK
        </button>
        <button
          className={`${styles.sort_button} ${
            filters.sortFilter === "ATK+" ? styles.sort_active : null
          }`}
          id="ATK+"
          onClick={sortHandler}
        >
          Menor ATK
        </button>
      </div>
      <h3 className={styles.title_type}>Select by: </h3>
      <div className={styles.db_api_buttons_container}>
        <button id="DB" className={`${filters.filterApiOrDb === "DB" ? styles.filter_button_active : null}`} onClick={apiOrDbHandler}>Data Base</button>
        <button id="API" onClick={apiOrDbHandler} className={`${filters.filterApiOrDb === "API" ? styles.filter_button_active : null}`} >API</button>
        <button id="ALL" onClick={apiOrDbHandler}className={`${filters.filterApiOrDb === "ALL" ? styles.filter_button_active : null}`}  >All Pokemons</button>
      </div>
    </div>  
  );
};

export default Filters;
