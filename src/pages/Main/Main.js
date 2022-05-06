import React from "react";
import "./Main.scss";
import Section01 from "../../components/Main/Section01/Section01";
import Section02 from "../../components/Main/Section02/Section02";
import Section03 from "../../components/Main/Section03/Section03";
import Section04 from "../../components/Main/Section04/Section04";
import Section05 from "../../components/Main/Section05/Section05";
import Section06 from "../../components/Main/Section06/Section06";
import Section07 from "../../components/Main/Section07/Section07";
import Section08 from "../../components/Main/Section08/Section08";
import Section09 from "../../components/Main/Section09/Section09";

const Main = () => {
  return (
    <div id="main">
      <Section01 />
      <Section02 />
      <Section03 />
      <Section04 />
      <Section05 />
      <Section06 />
      <Section07 />
      <Section08 />
      <Section09 />
    </div>
  );
};

export default Main;
