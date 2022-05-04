import React from "react";
import "./Main.scss";
import Section01 from "../../components/Section01/Section01";
import Section02 from "../../components/Section02/Section02";
import Section03 from "../../components/Section03/Section03";

const Main = () => {
  return (
    <div id="main">
      <Section01 />
      <Section02 />
      <Section03 />
    </div>
  );
};

export default Main;
