import React from "react";
import "./RoundRectangle.scss";
import { Link } from "react-router-dom";

function RoundRectangle({ text, bgColor, link }) {
  return (
    <div id="roundRectangle" className={bgColor}>
      {link ? (
        <Link to={link}>
          <span>{text}</span>
        </Link>
      ) : (
        <span>{text}</span>
      )}
    </div>
  );
}

export default RoundRectangle;
