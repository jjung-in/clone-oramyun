import React from "react";
import "./FoodCircle.scss";

function FoodCircle({ ramyunImg }) {
  return (
    <div id="foodCircle">
      <img src={ramyunImg} alt="ramyun" />
    </div>
  );
}

export default FoodCircle;
