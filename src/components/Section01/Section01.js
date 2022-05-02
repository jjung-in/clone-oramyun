import React from "react";
import "./Section01.scss";
import RoundRectangle from "../RoundRectangle/RoundRectangle";
import FoodCircle from "../FoodCircle/FoodCircle";
import ramyun6 from "../../assets/6.png";
import ramyun8 from "../../assets/8.png";
import ramyun14 from "../../assets/14.png";

function Section01() {
  const ramyunCircleArr1 = [{ ramyunImg: ramyun6 }, { ramyunImg: ramyun8 }, { ramyunImg: ramyun14 }, { ramyunImg: ramyun6 }, { ramyunImg: ramyun8 }, { ramyunImg: ramyun14 }, { ramyunImg: ramyun6 }, { ramyunImg: ramyun8 }, { ramyunImg: ramyun14 }, { ramyunImg: ramyun14 }];

  const ramyunCircleArr2 = [{ ramyunImg: ramyun6 }, { ramyunImg: ramyun8 }, { ramyunImg: ramyun14 }, { ramyunImg: ramyun6 }, { ramyunImg: ramyun8 }, { ramyunImg: ramyun14 }, { ramyunImg: ramyun6 }, { ramyunImg: ramyun8 }, { ramyunImg: ramyun14 }, { ramyunImg: ramyun14 }];

  return (
    <div id="section01">
      <div className="container">
        <div className="contents">
          <h4>
            <span className="c-point">먹고 싶은 라면만</span> 골라 담아요!
          </h4>
          <h2>
            오늘은 <br />
            어떤 <span className="c-point">라면</span>이 끌리나요?
          </h2>
          <RoundRectangle text="라면 골라보기 ＞" bgColor="blue" link="/" />
        </div>
      </div>
      <div className="ramyun-slide">
        <div className="foodCircle_row">
          {ramyunCircleArr1.map((v) => (
            <FoodCircle ramyunImg={v.ramyunImg} />
          ))}
        </div>
        <div className="foodCircle_row">
          {ramyunCircleArr2.map((v) => (
            <FoodCircle ramyunImg={v.ramyunImg} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Section01;
