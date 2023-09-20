import Image from "next/image";
import React from "react";
import useWindowSize from "/hooks/window";
import Heads from "/components/Heads";

const Refund = () => {
  const { width } = useWindowSize();
  return (
    <div className="refundContainer storyContainer missionContainer">
      <Heads title="Money On Dreams : Refund & Cancellation Policy" />
      <div className="refundBox storyBox">
        <div className="box">
          <h1>Refund & Cancellation policy</h1>
          <p>
            <label>Refund Policy:</label>
            <br />
            In case of a refund due to an erroneous transaction or cancellation,
            the premium paid for any financial product will be refunded through
            direct credit or cheque as per the prevailing policy of the
            respective financial Institutions that you have chosen to buy the
            product from.
          </p>

          <p>
            <label>Cancellation Policy:</label>
            <br />
            In case of a cancellation, the premium paid for any financial
            product will be refunded through direct credit or cheque as per the
            policy of the respective financial Institutions that you have chosen
            to buy the product from.
          </p>
        </div>
        <div className="otherDetails"></div>
      </div>

      <div className="storyPhone">
        <Image
          src="/image/refund.png"
          alt="phone"
          width={width < 1080 ? 200 : 378}
          height={width < 1080 ? 200 : 380}
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default Refund;
