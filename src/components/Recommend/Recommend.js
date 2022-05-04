import React from "react";
import "./Recommend.scss";
import RoundRectangle from "../RoundRectangle/RoundRectangle";

function Recommend({ img, imgOn, text, strong, target }) {
  return (
    <div id="recommend">
      <div className="img_wrap">
        <img src={img} alt="img" />
        <img src={imgOn} alt="imgOn" className="on" />
        <RoundRectangle text={target} bgColor="blue" />
      </div>
      <p>
        {text}
        <br />
        <strong className="c-point">{strong}</strong>
      </p>
    </div>
  );
}

export default Recommend;
