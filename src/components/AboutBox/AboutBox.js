import React from "react";
import "./AboutBox.scss";

function AboutBox({ stit, btit, more, position, bgImg }) {
  return (
    <div id="aboutBox" className={position}>
      <div className="text_wrap">
        <h4>{stit}</h4>
        <h3>{btit}</h3>
      </div>
      {more && <button>더보기</button>}
      <img src={bgImg} alt="" className="bgImg" />
    </div>
  );
}

export default AboutBox;
