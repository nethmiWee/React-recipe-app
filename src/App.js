
import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';
import './App.css';
require('dotenv').config();

const App = () => {

  //Food reciepe API Info
  const APP_ID = process.env.REACT_APP_API_ID;
  const APP_KEY = process.env.REACT_APP_API_KEY;

  //Store recipe info
  const [recipes, setRecipes] = useState([]);

  //Search
  const [search, setSearch] = useState('');

  //After click search button
  const [query, setQuery] = useState('chicken');

  //Render the request for reciepes
  useEffect(() => {
  getRecipes();
  }, [query]);

  //Puts in request for recipes
const getRecipes = async () => {
  
  try { 
const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);

  //After data comes
const data = await response.json();

   //Put recipe into array
  setRecipes(data.hits);
  console.log(data.hits); //use data for all info

  } catch(errorReason) { 
  // code on error
  console.log("Response didnt go through");
  console.log(errorReason);
}
 
};

//Able to change search (setSearch) text

const updateSearch = e => {
  setSearch(e.target.value);
}

//When button clicked
const getSearch = e => {
e.preventDefault(); //stop refreshing
setQuery(search); //makes query = search
setSearch('');
}

  return (
    
<div className="App">
  <div className="Banner">
  <h1 className="screen-title" >Food Recipe search</h1>
   <h2 className="sub-title" >Search an ingredient to get a recipe! </h2>
</div>
<form onSubmit={getSearch} className="search-form">
  <input className="search-bar" type="text" value={search} onChange={updateSearch} />
  <button className="search-button" type="submit">
  🍳</button>
</form>
<div className="recipes">
{recipes.map(recipe => (
  <Recipe 
  key={recipe.recipe.label}
  title={recipe.recipe.label} 
  calories={recipe.recipe.calories}
  image={recipe.recipe.image}
  ingredients={recipe.recipe.ingredients}
  />
))}
</div>
</div>
  );
};

export default App;
