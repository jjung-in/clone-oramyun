import React from "react";
import { Link } from "react-router-dom";
import "./Section06.scss";
import img_banner_coupon from "../../../assets/img_banner_coupon.png";

function Section06() {
  return (
    <div id="section06">
      <div className="container">
        <div className="pc-banner">
          <h5>오늘의 라면 신규회원이라면</h5>
          <h3>5,000원 웰컴 쿠폰을 쏩니다!</h3>
          <Link to="/">혜택 모두 보기 ＞</Link>
        </div>
        <div className="mobile-banner">
          <Link to="/">
            <img src={img_banner_coupon} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Section06;
