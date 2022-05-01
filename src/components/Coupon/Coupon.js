import React from "react";
import "./Coupon.scss";

function Coupon({ bgColor }) {
  return (
    <span id="coupon" className={bgColor}>
      ￦5,000 COUPON
    </span>
  );
}

export default Coupon;
