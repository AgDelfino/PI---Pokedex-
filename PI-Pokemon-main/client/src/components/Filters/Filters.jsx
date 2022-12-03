import React from "react";
import { useSelector } from "react-redux";
import styles from "./Filters.module.css";


const Filters = ({ filters }) => {
  const types = useSelector((state) => state.types);

  return (
    <div
      className={`${styles.main_container} ${
        filters ? styles.activeFilters : null
      }`}
    >
      <div className={styles.filters_container}>
        <h3 className={styles.title_type}>Filter by Type</h3>
        {types.map((type, index) => {
          const ruta = `../../../public/typesIcons/${type.name}.png`
          return (
            <button key={index} className={`${styles[type.name]} ${styles.type_buttons}`}/>
          );
        })}
      </div>
    </div>
  );
};

export default Filters;
