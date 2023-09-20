import Image from "next/image";
import React from "react";

const Story = () => {
  return (
    <div className="storyContainer missionContainer">
      <div className="missionBox storyBox">
        <h1>Our Story</h1>
        <p>
          In today&apos;s era, the income of the people is less but the expenses
          remain much more than the income, whether he is a job worker or a
          businessman, so he has to resort to financial products and due to lack
          of time, he is not able to choose the production according to him.
          Keeping this vision in view, Money on Dream platform was created where
          people can choose the product as per their choice and at the same time
          they can help the people around them to make the right choice about it
          and through this platform their can increase income.
        </p>
      </div>

      <div className="storyPhone">
        <Image
          src="/image/phone3.png"
          alt="phone"
          width={250}
          height={350}
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default Story;
