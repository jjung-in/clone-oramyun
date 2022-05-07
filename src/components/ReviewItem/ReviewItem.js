import React from "react";
import { Link } from "react-router-dom";
import "./ReviewItem.scss";

function ReviewItem({ img, name, content, pkg_tit, pkg_comp, date }) {
  return (
    <div id="reviewItem">
      <Link to="">
        <div className="img_wrap">
          <img src={img} alt="후기 사진" />
        </div>
        <div className="text_wrap">
          <p className="name">{name}</p>
          <p className="content">{content}</p>
          <p className="more">더보기 ＞</p>
          <p className="pkg_tit">{pkg_tit}</p>
          <p className="pkg_comp">{pkg_comp}</p>
          <p className="date">{date}</p>
        </div>
      </Link>
    </div>
  );
}

export default ReviewItem;
