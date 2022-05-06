import React from "react";
import { Link } from "react-router-dom";
import "./Section09.scss";
import img_snsbar_instagram from "../../../assets/img_snsbar_instagram.png";
import img_snsbar_kakao from "../../../assets/img_snsbar_kakao.png";
import insta_img05 from "../../../assets/277900405_703216981027729_1522598266781090985_n.jpg";

function Section09() {
  return (
    <div id="section09">
      <div className="container">
        <h5>Instagram · Kakao Channel</h5>
        <h3>오늘의 라면 소식이 궁금하다면?</h3>
        <div className="sns_btn_wrap">
          <Link to="/">
            <img src={img_snsbar_instagram} alt="instagram" />
          </Link>
          <Link to="/">
            <img src={img_snsbar_kakao} alt="kakao" />
          </Link>
        </div>
        <div className="instagram_wrap">
          <ul>
            <li>
              <Link to="/">
                <img src={insta_img05} alt="" />
              </Link>
            </li>
            <li>
              <Link to="/">
                <img src={insta_img05} alt="" />
              </Link>
            </li>
            <li>
              <Link to="/">
                <img src={insta_img05} alt="" />
              </Link>
            </li>
            <li>
              <Link to="/">
                <img src={insta_img05} alt="" />
              </Link>
            </li>
            <li>
              <Link to="/">
                <img src={insta_img05} alt="" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Section09;
