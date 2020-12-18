import React, { useEffect, useState } from "react";
import { getRecipe } from "./utils/fetch/get";
import SingleRecipe from "./components/singleRecipe";
import "./App.css";

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

  //Get recipes
  const getData = async (value) => {
    const data = await getRecipe(value);
    if (data !== undefined) {
      const { hits, count } = data;
      getSetRecipes(hits, count);
    }
  };
  const getSetRecipes = (hits, count) => {
    const recipeArray = hits.map((value, index) => {
      const { recipe } = value;
      const { label, url, image } = recipe;
      return { label, url, image };
    });

    setRecipes(recipeArray);
  };
  //IMPORT image dinamically
  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  }
  const images = importAll(
    require.context("../public/img/", false, /\.(png|jpe?g|svg)$/)
  );
  //change extension of img to render correctly
  const renderImage = (images, value) => {
    const listExt = ["jpg", "jpeg", "png"];
    for (let index = 0; index < listExt.length; index++) {
      const imgExpression = images[`${value.toLowerCase()}.${listExt[index]}`];
      if (imgExpression !== undefined)
        return <img src={imgExpression.default} alt={value}></img>;
    }
  };

  let meseCorrente = "Dicembre";
  return (
    <div>
      <div className="header">
        <a name="top"></a>
        <h1>Ecco le verdure di stagione a {meseCorrente} in Italia </h1>
      </div>
      <br></br>
      <h4>Clicca su una verdura per visualizzare alcune delle ricette</h4>
      <br></br>
      {recipes.length > 0 && (
        <a href="#vegetables">Torna alla lista delle verdure</a>
      )}
      {recipes.length > 0 &&
        recipes.map((recipe, index) => {
          const { label, image, url } = recipe;
          return (
            <SingleRecipe key={index} name={label} url={url} imgUrl={image} />
          );
        })}
      <br></br>
      <div className="all-vegetables">
      {listOfVegetables.map((value, index) => {
        return (
          <div className='vegetable-box'>
            <a name="vegetables"></a>
            {/* render image programmatically and avoid extension crash */}

            <div onClick={() => getData(value)}>
              <a className='clickable' href="#top">
                {renderImage(images, value)}

                <span
                  className="vegetable middle"
                  key={index}
                  onClick={() => getData(value)}
                >
                  {`${value}`}{" "}
                </span>
              </a>
            </div>
          </div>
        );
      })}
       </div>
    </div>
  );
}
