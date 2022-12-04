import React from "react";
import { useSelector } from "react-redux";
import styles from "./Filters.module.css";

const Filters = ({ filters, setFilters, paginator }) => {

const types = useSelector((state) => state.types);

  const typeHandler = (e) => {
    const type = e.target.id;
    const arrTypes = ["", ""];
    paginator(1)

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
              filters.typeFilter.find(f => f === type.name) ? styles.active_type : null
              }`}
              onClick={typeHandler}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Filters;
