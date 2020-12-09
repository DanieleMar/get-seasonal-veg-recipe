import React from "react";
import './index.css'
export default function SingleRecipe(props) {
  const { name, url, ingredients, imgUrl } = props;
  return (
    <div>
      {name}
      <a href={url}>Scopri di più</a>

      <img src={imgUrl} alt={name} width="200" height="200"></img>
    </div>
  );
}
