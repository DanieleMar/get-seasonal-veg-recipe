import React, { useState } from "react";
import { getRecipe } from "./utils/fetch/get";
import SingleRecipe from "./components/singleRecipe";

export default function App() {
  const [recipes, setRecipes] = useState([]);
  const listOfVegetables = [
    "Garlic",
    "Chard",
    "Artichoke",
    "Thistle",
    "Carrot",
    "Cabbage",
    "Chickpea",
    "Chicory",
    "Onion",
    "Chives",
    "Bean",
    "Fennel",
    "Lettuce",
    "Lentil",
    "Potato",
    "Pea",
    "Leek",
    "Radicchio",
    "Shallot",
    "Celery",
    "Spinach",
    "JerusalemArtichoke",
    "Pumpkin",
  ];

  const getData = async (value) => {
    const data = await getRecipe(value);
    if (data !== undefined) {
      const { hits, count } = data;
      getSetRecipes(hits, count);
    }
  };
  const getSetRecipes = (hits, count) => {
    //creare un array fatto di oggetti recipe che contengono nome e url della ricetta
    //deve essere lungo, la metà degli elementi di hits
    const recipeArray = hits.map((value, index) => {
      const { recipe } = value;
      const { label, url, image } = recipe;
      return { label, url, image };
    });

    setRecipes(recipeArray);
  };

  let meseCorrente = "Dicembre";
  return (
    <div>

      Ecco le verdure di stagione a {meseCorrente} in Italia <br></br>
      {listOfVegetables.map((value, index) => {
        return (
          <span key={index} onClick={() => getData(value)}>{`${value}, `}</span>
        );
      })}

      {recipes.length > 0 &&
        recipes.map((recipe, index) => {
          const { label, image, url } = recipe;
          return (
            <SingleRecipe key={index} name={label} url={url} imgUrl={image} />
          );
        })}
    </div>
  );
}

