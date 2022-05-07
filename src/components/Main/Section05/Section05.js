import React from "react";
import "./Section05.scss";
import ReviewItem from "../../ReviewItem/ReviewItem";
import reviewImg01 from "../../../assets/sample_ORMN_REVIEW_202201140318211050.jpg";
import reviewImg02 from "../../../assets/sample_ORMN_REVIEW_202111201251195072.jpg";

function Section05() {
  const reviewArr = [
    {
      img: reviewImg01,
      name: "이**님",
      content: "자취생한테 너무 편리한거같애여! 라면사러 나가기 귀찮을때가 많은데 정기배송까지되서 너무 행복해요..★ 오라면짱",
      pkg_tit: "자유구성 (Single)",
      pkg_comp: "사천백짬뽕 외 4개",
      date: "2022-02-11",
    },
    {
      img: reviewImg02,
      name: "이**님",
      content: "자취생한테 너무 편리한거같애여! 라면사러 나가기 귀찮을때가 많은데 정기배송까지되서 너무 행복해요..★ 오라면짱 자취생한테 너무 편리한거같애여! 라면사러 나가기 귀찮을때가 많은데 정기배송까지되서 너무 행복해요..★ 오라면짱",
      pkg_tit: "자유구성 (Single)",
      pkg_comp: "사천백짬뽕 외 4개",
      date: "2022-02-11",
    },
    {
      img: reviewImg01,
      name: "이**님",
      content: "자취생한테 너무 편리한거같애여! 라면사러 나가기 귀찮을때가 많은데 정기배송까지되서 너무 행복해요..★ 오라면짱",
      pkg_tit: "자유구성 (Single)",
      pkg_comp: "사천백짬뽕 외 4개",
      date: "2022-02-11",
    },
    {
      img: reviewImg01,
      name: "이**님",
      content: "자취생한테 너무 편리한거같애여! 라면사러 나가기 귀찮을때가 많은데 정기배송까지되서 너무 행복해요..★ 오라면짱",
      pkg_tit: "자유구성 (Single)",
      pkg_comp: "사천백짬뽕 외 4개",
      date: "2022-02-11",
    },
    {
      img: reviewImg01,
      name: "이**님",
      content: "자취생한테 너무 편리한거같애여! 라면사러 나가기 귀찮을때가 많은데 정기배송까지되서 너무 행복해요..★ 오라면짱",
      pkg_tit: "자유구성 (Single)",
      pkg_comp: "사천백짬뽕 외 4개",
      date: "2022-02-11",
    },
  ];
  return (
    <div id="section05">
      <div className="container">
        <h5>고민하지 마세요</h5>
        <h3>
          이미 많은 분들이
          <br />
          오늘의 라면을 시작했어요!
        </h3>
      </div>
      <div className="review_box">
        {reviewArr.map((v, index) => (
          <ReviewItem key={index} img={v.img} name={v.name} content={v.content} pkg_tit={v.pkg_tit} pkg_comp={v.pkg_comp} date={v.date} />
        ))}
      </div>
    </div>
  );
}

export default Section05;
