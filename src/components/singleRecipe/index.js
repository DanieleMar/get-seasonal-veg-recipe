import React from "react";
import './index.css'
export default function SingleRecipe(props) {
  const { name, url, ingredients, imgUrl, className } = props;
  return (
    <div className={className}>
      
      

      <img src={imgUrl} alt={name} width="200" height="200"></img>
      <a className='caption green' href={url}>{name}</a>
    </div>
  );
}
