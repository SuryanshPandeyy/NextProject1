import { useRouter } from "next/router";
import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { IoIosArrowRoundBack } from "react-icons/io";
import Heads from "/components/Heads";

const FaqTab = ({ item }) => {
  const [show, setShow] = useState(false);

  const expand = () => {
    setShow(!show);
  };

  return (
    <div className="faqTabListContainer">
      <div className="faqTabList" onClick={expand}>
        <div className="faqQuest">{item.quest}</div>
        <div>
          <BsChevronDown className={show ? "faqIconRotate" : "faqIcon"} />
        </div>
      </div>
      <div className={show ? "faqAnsShow" : "faqAns"}>{item.ans}</div>
    </div>
  );
};

const Faq = () => {
  const router = useRouter();
  const faqData = [
    {
      quest: "What is the Money On Dream app?",
      ans: "Money On Dream is a plateform where you will be rewarded for recommending and promoting brands through person-to-person intarections.",
    },
    {
      quest: "What is the refer code of Money On Dream app?",
      ans: "Money On Dream refer code : 123456",
    },
    {
      quest: "What is the payout time?",
      ans: "5 to 7 working days after successful approved.",
    },
    {
      quest: "Who is the founder of Money On Dream?",
      ans: "Mr. Suresh Kumar",
    },
    {
      quest: "Who is the CEO of Money On Dream?",
      ans: "Mr. Suresh Kumar",
    },
    {
      quest: "Who is the CO-CEO of Money On Dream?",
      ans: "Mr. Sandeep Sabal",
    },
    {
      quest: "What is the customer care number Money On Dream?",
      ans: "Money On Dream customer support number : 9799989693",
    },
    {
      quest: "How to get sign up bonus of Money On Dream?",
      ans: "Sign up bonus will be unlocked when your and your downline  first lead is approved.",
    },
    {
      quest: "How to get referal bonus of Money On Dream?",
      ans: "Referal bonus will be unlocked when your and your downline  first lead is approved.",
    },
    {
      quest: "How to earn money from Money On Dream?",
      ans: "Self Selling : In this scenario you can sale our product direct to customer & earn maximum commission. Team Selling : In this scenario you can refer Money on Dream app and our products to your contacts, friends & earn commision your down line up to 10% on their sales.",
    },
    {
      quest: "Which is the best money earning app?",
      ans: "Money On Dream is a best money earning app.",
    },
  ];
  return (
    <>
      <Heads title="Money On Dreams : FAQs" />
      <div className="back" onClick={() => router.back()}>
        <IoIosArrowRoundBack size={40} />
      </div>
      <div className="faqContainer">
        <h1>FAQs</h1>
        <div className="faqTab">
          {faqData.map((item, i) => {
            return <FaqTab key={i} item={item} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Faq;
