import React from "react";
import "./Section02.scss";
import RoundRectangle from "../RoundRectangle/RoundRectangle";

function Section02() {
  return (
    <div id="section02">
      <div className="container">
        <h2>
          이젠, <span className="c-point">라면</span>도<br />
          <span className="c-point">편하게 구독</span>하세요!
        </h2>
        <h4>
          먹고 싶은 라면만 고르면
          <br />
          <span className="c-point">다 떨어질 때 쯤 알아서 배송 오니까!</span>
          <br />
          <br />
					마트에서 한 묶음 씩 사기는 망설여지고,<br />
					편의점엔 원하는 라면이 없어 실망했던<br/>
					여러분들을 위해 <span className="c-point">오늘의 라면</span>이 탄생했습니다.
        </h4>
        <RoundRectangle text="오늘의 라면 100% 활용법 ＞" bgColor="blue" link="/" />
      </div>
    </div>
  );
}

export default Section02;
