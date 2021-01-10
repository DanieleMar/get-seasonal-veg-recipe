import React from "react";
import "./style.css";

const Popup = (props) => {
  const { text, closePopup } = props;
  return (
    <div >
      <div className="popup_inner">
        <h1>{text}</h1>
        <button onClick={closePopup}>close me</button>
      </div>
    </div>
  );
};

export default Popup;
