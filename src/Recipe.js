import { def } from "@vue/shared";
import React from "react";
import style from './recipe.module.css';

const Recipe = ({title, calories, image, ingredients}) => {
    return(
<div className={style.recipe}>
    <h1>{title}</h1>
     <p>Calories: {calories}</p>  
     <ol>
{ingredients.map(ingredient =>(
    <li>{ingredient.text}</li>
))}
    </ol>
     
    <img className={style.img} src={image} alt=""/>
</div>
    );
}

export default Recipe;