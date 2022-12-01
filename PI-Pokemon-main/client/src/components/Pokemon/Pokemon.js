import React from "react";
import style from './Pokemon.module.css'

const Pokemon = ({id, name, image, attack, types}) => {
    return (
        <div className={style.card_container}>
            <div className={style.card_container_title}>
                <span className={style.card_title}>{name}</span>
            </div>
            <div className={style.card_img_container}>
                <img src={image} alt={name}></img>
            </div>
            <div className={style.types_container}>
                {
                    types.map((type, index) => {
                        return (
                            <span className={style.types_name} key={index}>{type.name}</span>
                        )
                    })
                }
            </div>
            <div className={style.types_container}>
                <span className={style.text_attack}>Attack: {attack}</span>
            </div>
        </div>
    )
}

export default Pokemon