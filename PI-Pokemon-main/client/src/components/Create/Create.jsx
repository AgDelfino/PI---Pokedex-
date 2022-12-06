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
    types: ["",""],
  });

  useEffect(() => {
    console.log(input.types);
  },[input])

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleTypesChange = (e) => {
    e.preventDefault()
    let type = e.target.name
    let newType = [...input.types]

    if(input.types.find(t => t === type)){
      return setInput((state) => ({...state, types: input.types.filter(t => t !== type).concat('')}))
    }

    if(input.types[0] && input.types[1]){
      return setInput((state) => ({...state, types: newType}))
    }
    if(!input.types[0] && !input.types[1]) {
      newType[0] = type
      return setInput((state) => ({...state, types: newType}))
    }
    if(input.types[0] && !input.types[1]){
      newType[1] = type
      return setInput((state) => ({...state, types: newType}))
    }
    if(!input.types[0] && input.types[1]){
      newType[0] = type
      return setInput((state) => ({...state, types: newType}))
    }

  }

  return (
    <div>
      <NavBar />
      <h1>CREATE YOUR POKEMON!</h1>

      <div className={styles.form_container}>
        <form className={styles.form}>
          <input
            value={input.name}
            name="name"
            type="text"
            placeholder="Name..."
            onChange={(e) => handleChange(e)}
          ></input>
          <input
            value={input.attack}
            name="attack"
            type="number"
            placeholder="Attack..."
            onChange={(e) => handleChange(e)}
          ></input>
          <input
            value={input.defense}
            name="defense"
            type="number"
            placeholder="Defense..."
            onChange={(e) => handleChange(e)}
          ></input>
          <input
            value={input.hp}
            name="hp"
            type="number"
            placeholder="HP..."
            onChange={(e) => handleChange(e)}
          ></input>
          <input
            value={input.speed}
            name="speed"
            type="number"
            placeholder="Speed..."
            onChange={(e) => handleChange(e)}
          ></input>
          <input
            value={input.height}
            name="height"
            type="number"
            placeholder="Height..."
            onChange={(e) => handleChange(e)}
          ></input>
          <input
            value={input.weight}
            name="weight"
            type="number"
            placeholder="Weight..."
            onChange={(e) => handleChange(e)}
          ></input>
          {types && types.length
            ? types.map((type) => {
                return <button  name={type.name} value={type.name} onClick={handleTypesChange} key={type.name}>{type.name}</button>;
              })
            : null}
        </form>
      </div>
    </div>
  );
};

export default Create;
