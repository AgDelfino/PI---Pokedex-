import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTypes } from "../../Redux/actions";
import NavBar from "../NavBar/NavBar";
import styles from "./Create.module.css";
import Pokemon from "../Pokemon/Pokemon";

const Create = () => {
  const types = useSelector((state) => state.types);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTypes());
  }, [dispatch]);

  const [input, setInput] = useState({
    name: "",
    attack: 0,
    defense: 0,
    hp: 0,
    speed: 0,
    height: 0,
    weight: 0,
    image: "",
    types: [],
  });
  const handleChange = (e) => {
    setInput({...input, [e.target.name]: e.target.value})
    console.log(input);
  };

  return (
    <div>
      <NavBar />
      <h1>CREATE YOUR POKEMON!</h1>

      <div className={styles.form_container}>
        <form className={styles.form} >
          <input
            type="text"
            placeholder="Name..."
            onChange={(e) => handleChange(e)}
          ></input>
          <input type="number" placeholder="Attack..."  onChange={(e) => handleChange(e)} ></input>
          <input type="number" placeholder="Defense..."></input>
          <input type="number" placeholder="HP..."></input>
          <input type="number" placeholder="Speed..."></input>
          <input type="number" placeholder="Height..."></input>
          <input type="number" placeholder="Weight..."></input>
          <input type="text" placeholder="URL..."></input>
          {types && types.length
            ? types.map((type) => {
                return <button value={type.name}>{type.name}</button>;
              })
            : null}
        </form>
        {/* <Pokemon id={""} name={""} type /> */}
      </div>
    </div>
  );
};

export default Create;
