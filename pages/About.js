import Image from "next/image";
import React from "react";
import Heads from "/components/Heads";
const About = () => {
  return (
    <>
      <Heads title="Money On Dreams : About Us" />
      <div className="aboutContainer missionContainer">
        <div className="aboutBox">
          <h1>About Us</h1>
          <p>
            Money On Dream is a Platform , Which Started In November 2021 By JMD
            Fintech Private Limited. Our Company Head Office Is In Kuchaman City
            (Nagaur) Rajasthan. Mr. Suresh Kumar (CEO & Director) and Mr.
            Sandeep Sabal (Co – CEO & Director )both are founders of our
            Company. Company Established in November 2021 , After The Company
            Founded Just In A Few Months Our Company Identity In Various States
            Of India , Due To Our service & our Agents hard working & Dedication
            , Today We Have popular In Different States Of India. The AIM Of Our
            Company Is To Remove The Problem Of Increasing Unemployment In India
            So That We Can Provide The Youth Of India To Get a Better Life And
            Our Only AIM Is That In Future, In India No One Remains Unemployed
            So That The Problem Of Unemployment Should Not Arise And Our AIM Is
            To Make 10 Lakh People Employed Till 2025 And Make Them-self
            Empowered Our Company Works With Financial And Banking Sector ,
            Through Our (Money On Dream ) App You Can Earn A Higher Income From
            Home , What-Ever Product You Have Sale Banking & Financial Products
            Through Our App , Such As Saving Account , Demat Account , Loans ,
            Crypto Investment , UPI Creation , Credit Card , EMI Cards, Mutual
            Funds .You Can Get A Good Commission By Selling All These Products
            Through Our ( Money On Dream ) Application.
          </p>
        </div>

        <div className="storyPhone">
          <Image
            src="/image/about.png"
            alt="phone"
            width={476}
            height={505}
            objectFit="cover"
          />
        </div>
      </div>

      <div className="aboutFooter">
        <div className="aboutFooter1">
          <a
            target="blank"
            href="https://play.google.com/store/apps/details?id=com.moneyon.dreams"
            className="downloadContainer"
          >
            <div className={"downloadBox"}>
              <div className="donwloadImg1">
                <Image
                  src="/icon/play.png"
                  alt="play_store"
                  width={22}
                  height={22}
                />
              </div>

              <div className="donwloadImg2">
                <Image
                  src="/icon/play_white.png"
                  alt="play_store"
                  width={22}
                  height={22}
                />
              </div>

              <div>Download Now</div>
            </div>
          </a>
          <div className="aboutLine"></div>
          <div className="aboutFooterContent">
            <p>
              App is available for free on <br /> Google Play
            </p>
          </div>
        </div>
        <div className="aboutFooter2">
          <form>
            <div className="prefix">+91</div>
            <input placeholder="Enter your mobile number" />
            <button>Send app link</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default About;
