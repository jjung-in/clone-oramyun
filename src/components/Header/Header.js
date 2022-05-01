import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import Coupon from "../Coupon/Coupon";
import logo from "../../assets/logo.svg";

const Header = () => {
	const [open, onOpen] = useState(false);

  function onOpenBtnClick() {
		onOpen(true);
	}

  function onCloseBtnClick() {
		onOpen(false);
	}
  
  return (
    <>
      <div id="header">
        <div className="container">
          <div className="header_inwrap">
            <h1>
              <Link to="/"><img src={logo} alt="logo" className="logo" /></Link>
            </h1>
            <div className="gnb">
              <ul>
                <li><Link to="/">구독하기</Link></li>
                <li><Link to="/">선물하기</Link></li>
                <li><Link to="/">이달의 라시피</Link></li>
                <li><Link to="/">이벤트</Link></li>
              </ul>
            </div>
            <div className="rnb">
              <div className="rnb_left">
                <ul>
                  <li><Link to="/">뜨끈한 리뷰</Link></li>
                  <li><Link to="/">라면을 맞혀라!</Link></li>
                  <li><Link to="/">라니툰</Link></li>
                  <li><Link to="/">공지사항</Link></li>
                  <li><Link to="/">FAQ</Link></li>
                </ul>
              </div>
              <div className="rnb_right">
                <Link to="/" className="join">
                  회원가입
                  <Coupon bgColor="blue" />
                </Link>
                <Link to="/" className="login">로그인</Link>
              </div>
            </div>
            <div className="mobile_rnb_btn">
              <button onClick={onOpenBtnClick}>
                <span></span>
              </button>
            </div>
          </div>
          <div className={`mobile_rnb ${open ? "open" : ""}`}>
            <div className="mobile_rnb_top">
              <ul>
                <li>
                  <Link to="/">회원가입</Link>
                  <Coupon bgColor="orange" />
                </li>
                <li><Link to="/">로그인</Link></li>
              </ul>
              <button onClick={onCloseBtnClick}></button>
            </div>
            <div className="mobile_rnb_middle">
              <ul>
                <li><Link to="/">구독하기</Link></li>
                <li><Link to="/">선물하기</Link></li>
                <li><Link to="/">이달의 라시피</Link></li>
                <li><Link to="/">이벤트</Link></li>
              </ul>
            </div>
            <div className="mobile_rnb_util">
              <ul>
                <li><Link to="/" className="c-point">뜨끈한 리뷰</Link></li>
                <li><Link to="/">라면을 맞혀라!</Link></li>
                <li><Link to="/">라니툰</Link></li>
                <li><Link to="/">공지사항</Link></li>
                <li><Link to="/">FAQ</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <nav id="nav">
        <div className="container">
          <ul>
            <li><Link to="/">구독하기</Link></li>
            <li><Link to="/">선물하기</Link></li>
            <li><Link to="/">뜨끈한 리뷰</Link></li>
            <li><Link to="/">이벤트</Link></li>
            <li><Link to="/">이달의 라시피</Link></li>
            <li><Link to="/">라니툰</Link></li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
