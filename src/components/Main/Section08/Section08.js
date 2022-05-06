import React from "react";
import { Link } from "react-router-dom";
import "./Section08.scss";
import img_banner_gift from "../../../assets/img_banner_gift.png";

function Section08() {
  return (
    <div id="section08">
      <div className="container">
        <div className="pc-banner">
          <h3>잠깐, 오늘의라면 선물은 어떠세요?</h3>
          <h5>
            집들이 선물이나 깜짝 선물로 추천!
            <br />
            좋아하는 라면만 가득 담아 드리세요
          </h5>
          <Link to="/">선물하기 ＞</Link>
        </div>
        <div className="mobile-banner">
          <Link to="/">
            <img src={img_banner_gift} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Section08;
