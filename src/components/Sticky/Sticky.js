import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sticky.scss";
import ico_event_close from "../../assets/ico_event_close.png";

function Sticky() {
	const [close, onClose] = useState(false);

	function onCloseBtnClick() {
		onClose(true);
	}

  return (
    <div className={`sticky_wrap ${close ? "off" : ""}`}>
      <div className="container">
        <div className="sticky_inwrap">
          <Link to="/">
            <span>회원가입 즉시 5,000원 웰컴쿠폰을 드려요 💖</span>
            <button onClick={onCloseBtnClick}>
              <img src={ico_event_close} alt="닫기" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sticky;
