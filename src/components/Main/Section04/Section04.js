import React from "react";
import "./Section04.scss";
import AboutBox from "../../AboutBox/AboutBox";
import img_about_bg01 from "../../../assets/img_about_bg01.png";
import img_about_bg02 from "../../../assets/img_about_bg02.png";
import img_about_bg03 from "../../../assets/img_about_bg03.png";
import img_about_bg04 from "../../../assets/img_about_bg04.png";
import img_character from "../../../assets/img_sec01_character.png";

function Section04() {
  return (
    <div id="section04">
      <div className="container">
        <img src={img_character} alt="" className="point_img" />
        <AboutBox stit="오직 구독으로 누리는 혜택!" btit={"최대 60% 할인 받고\n평생 무료배송 받아요!"} more="true" position="left" bgImg={img_about_bg01} />
        <AboutBox stit="오직 구독으로 누리는 혜택!" btit={"최대 60% 할인 받고\n평생 무료배송 받아요!"} position="right" bgImg={img_about_bg02} />
        <AboutBox stit="오직 구독으로 누리는 혜택!" btit={"최대 60% 할인 받고\n평생 무료배송 받아요!"} more="true" position="left" bgImg={img_about_bg03} />
        <AboutBox stit="해외라면을 포함한 100여 종 인기라면!" btit={"즐겨먹던 라면부터\n궁금했던 라면까지 한 번에"} more="true" position="right" bgImg={img_about_bg04} />
      </div>
    </div>
  );
}

export default Section04;
