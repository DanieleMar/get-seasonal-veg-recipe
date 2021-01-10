import React, { useEffect, useState } from "react";
import { getRecipe } from "./utils/fetch/get";
import SingleRecipe from "./components/singleRecipe";
import "./App.css";
import Popup from './components/popup';


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


  const [showPopup, setShowPopup] = useState(false);

  //Get recipes
  const getData = async (value) => {
    setShowPopup(true) //open popup while loading
  
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
    setShowPopup(false) // close popup when recipes are rendered
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


  const closePopup=() =>{
    setShowPopup(false);}


  return (
    <div>
      {/* <PopupExample /> */}



      {showPopup ?
         <Popup
          text='Loading...'
          closePopup={()=> closePopup()}
         />
         : null
       }

      {/* End Popup */}
      <div className="header">
        <a name="top"></a>
        <h1>Ecco le verdure di stagione a {meseCorrente} in Italia </h1>
      </div>
      <br></br>
      <h4>Clicca su una verdura per visualizzare alcune delle ricette</h4>
      <br></br>
      {recipes.length > 0 && (
        <>
          <a className="middle" href="#vegetables">
            Torna alla lista delle verdure
          </a>
          <h1>Lista di Ricette</h1>
        </>
      )}
      <div className="recipesList">
        {recipes.length > 0 && 
          recipes.map((recipe, index) => {
            const { label, image, url } = recipe;
            return (
              <SingleRecipe
                className="singleRecipe"
                key={index}
                name={label}
                url={url}
                imgUrl={image}
              />
            );
          })}
      </div>
      <br></br>
      <h1>Lista di Verdure</h1>
      <div className="all-vegetables">
        {listOfVegetables.map((value, index) => {
          return (
            <div className="vegetable-box">
              <a name="vegetables"></a>
              {/* render image programmatically and avoid extension crash */}

              <div onClick={() => getData(value)}>
                <a className="clickable" href="#top">
                  {renderImage(images, value)}

                  <span
                    className="vegetable middle green"
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
