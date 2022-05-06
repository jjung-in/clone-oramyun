import React from "react";
import "./Section07.scss";
import RoundRectangle from "../../RoundRectangle/RoundRectangle";

function Section07() {
  return (
    <div id="section07">
      <div className="container">
        <div className="subscribe_box">
          <h5>안심하세요, 7일 전 알려 드릴게요!</h5>
          <h3>
            다음 결제일 미리 확인하고 <br />
            구독 변경과 해지도 자유롭게!
          </h3>
        </div>
        <div className="button_wrap">
          <RoundRectangle text="첫 구독 5,900원부터 시작하기 ＞" bgColor="blue" link="/" />
          <p>※ 스테디셀러 Single 웰컴 쿠폰 적용 시</p>
        </div>
      </div>
    </div>
  );
}

export default Section07;
