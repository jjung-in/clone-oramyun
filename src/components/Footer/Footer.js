import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";
import ico_instagram from "../../assets/ico_instagram.png";
import ico_kakaochannel from "../../assets/ico_kakaochannel.png";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer_top">
				<div className="container footer_top_inwrap">
					<ul className="footer_menu">
						<li><Link to="">이용약관</Link></li>
						<li><Link to="">개인정보처리방침</Link></li>
						<li><Link to="">입점/제휴 문의</Link></li>
						<li><Link to="">기업/대량 구매</Link></li>
					</ul>
					<ul className="footer_sns">
						<li className="f-insta">
							<Link to="/">
								<img src={ico_instagram} alt="instagram" />
								<span>인스타그램</span>
							</Link>
						</li>
						<li className="f-kakao">
							<Link to="/">
								<img src={ico_kakaochannel} alt="kakaochannel" />
								<span>카카오채널</span>
							</Link>
						</li>
					</ul>
				</div>
			</div>
      <div className="footer_btm">
				<div className="container footer_btm_inwrap">
					<div className="f_btm_left">
						<p>INFO</p>
						<ul>
							<li>
								<span>(주)라파사</span>
								부산 해운대구 센텀북대로 60 센텀IS타워 1007호
							</li>
							<li>
								<span>대표자명</span>
								박종덕
							</li>
							<li>
								<span>사업자등록번호</span>
								732-86-02695
								<Link to="/">[사업자정보확인]</Link>
							</li>
							<li>
								<span>통신판매업신고번호</span>
								2012-부산해운-0108
							</li>
						</ul>
					</div>
					<div className="f_btm_right">
						<p>CS CENTER</p>
						<ul>
							<li>
								<span>문의전화</span>
								070-4351-3012
							</li>
							<li>
								<span>업무시간</span>
								평일 10:00 ~ 17:00 (주말/공휴일 휴무)
							</li>
							<li>
								<span>문의메일</span>
								rrh@uxis.co.kr
							</li>
							<li>
								<span>팩스번호</span>
								051-780-8157
							</li>
						</ul>
					</div>
				</div>
			</div>
      <div className="copyright">
        <span>Copyright ⓒ 2021 Today Noodle All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
