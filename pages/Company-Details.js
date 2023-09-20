import Image from "next/image";
import React from "react";
import Heads from "/components/Heads";

const Company = () => {
  return (
    <div className="companyContainer storyContainer missionContainer">
      <Heads title="Money On Dreams: Company Details" />
      <div className="storyBox">
        <div className="box">
          <h1>Company Details</h1>
          <p>
            Incorporated in 2021, Money On Dream provides employment from home
            to unemployed and part time job seekers and earners of extra income
            through Refer and Earn platform in rural and semi urban areas. With
            the expansion of reach and reach, Money On Dream is today a
            well-known name in the Fintech segment. It provides employment on
            zero investment to those people who want to earn extra income or
            money sitting at home by working hard but they do not have any
            reliable opportunity and platform on which they can work and pay
            them on time. Strong foundation, retail focused strategy, and
            transparent and ethical business operations, the Company continues
            to take along all in its financial inclusion journey.
          </p>
        </div>
        <div className="otherDetails">
          <p>
            Reg. No. : U67190RJ2021PTC078017
            <br />
            Address Registered Company Office : JMD Fintech Pvt. Ltd. - 1st
            Floor, Agrasen Plaza, Near Bus Stand, Kuchaman City, Nagaur (Raj.)
            India - 341508
            <br />
            TAN No. : JDHJ05819C | GSTIN : 08AAFCJ3971R1ZR
          </p>
        </div>
      </div>

      <div className="storyPhone">
        <Image
          src="/image/phone.png"
          alt="phone"
          width={467}
          height={488}
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default Company;
