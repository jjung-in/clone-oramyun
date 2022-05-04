import React from "react";
import "./Section03.scss";
import Recommend from "../Recommend/Recommend";
import sec03_img01 from "../../assets/img_sec02_img01.png";
import sec03_img01on from "../../assets/img_sec02_img01on.png";

function Section03() {
  return (
    <div id="section03">
      <div className="container">
        <h2>특히 이런 분들께 추천드려요!</h2>
        <h4>지금 바로 구독해야 할 이유!</h4>
        <div className="recommend-slide">
          <Recommend text="안 먹어봤던 라면도 있네요" strong="편의점보다 종류가 더 다양해요" img={sec03_img01} imgOn={sec03_img01on} target="라면광" />
          <Recommend text="안 먹어봤던 라면도 있네요" strong="편의점보다 종류가 더 다양해요" img={sec03_img01} imgOn={sec03_img01on} target="라면광" />
          <Recommend text="안 먹어봤던 라면도 있네요" strong="편의점보다 종류가 더 다양해요" img={sec03_img01} imgOn={sec03_img01on} target="라면광" />
          <Recommend text="안 먹어봤던 라면도 있네요" strong="편의점보다 종류가 더 다양해요" img={sec03_img01} imgOn={sec03_img01on} target="라면광" />
          <Recommend text="안 먹어봤던 라면도 있네요" strong="편의점보다 종류가 더 다양해요" img={sec03_img01} imgOn={sec03_img01on} target="라면광" />
        </div>
      </div>
    </div>
  );
}

export default Section03;
