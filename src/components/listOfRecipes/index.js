import React, { useEffect, useState } from "react";
import { fetchRecipe } from "../utils/fetch/get";
import SingleRecipe from "../singleRecipe/index";

export default function ListOfRecipes() {
  const [recipe, setRecipe] = useState([]);
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

  const getData = async () => {
    for (const e of listOfVegetables){ //fetch from api. 1 recipe for every element
      const data = await fetchRecipe(e); 
      setRecipe(...recipe, data);
    }
    // const data = await fetchRecipe(listOfVegetables[0]); //fetch from api
    
    // // const dataFile =  await fetchFromFile()           //fetch from file
    // // console.log(response.hits);

    // setRecipe(...recipe, data);
    
    console.log('recipe from useeffect', recipe);
    // return response;
  };
  useEffect(() => {


    getData();

  }, []);

  //  useEffect(() => {   console.log('',recipe);}, [recipe]);

  return (
    <div>
      {/* {console.log("recipe2", recipe.hits.recipe)} */}


     {/* {recipe !== "undefined" && console.log("recipe !== 'undefined'")} // check if undefined */} 
      
      
      
      {/* {recipe !== "undefined" && console.log("recipe2", recipe.hits)} */}
      {/* {recipe !== "undefined" && console.log("recipe2", recipe.hits[0].recipe)} */}

      
      
      {recipe.hits &&  recipe.hits.map((elem, index) => {
  
          <SingleRecipe
            key={index}
            name={elem.recipe.label}
            // ingredients
            imgUrl={elem.recipe.image}
            url={elem.recipe.url}
          ></SingleRecipe>
          console.log('inside 3030 ',elem.recipe.image);
        })}
    </div>
  );
}
