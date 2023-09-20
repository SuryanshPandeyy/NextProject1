import Image from "next/image";
import React from "react";

const Mission = () => {
  return (
    <div className="missionContainer">
      <div className="missionBox">
        <h1>Our Mission</h1>
        <p>
          Money On Dream is a platform dedicated to make the people of India
          self reliant through financial products through which people can
          increase their income by assessing the best type of any financial
          product and make more and more people a self reliant get employment.
        </p>
      </div>
      <div className="missionBox2">
        <h1>Take Your Career To Next Level</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aenean
          justo, lectus eu, libero, vivamus erat dictum placerat. Pulvinar
          placerat ut aenean morbi aenean viverra sollicitudin etiam. Velit
          viverra elementum cras tristique est, faucibus luctus scelerisque non.
          Facilisis laoreet turpis risus praesent.
        </p>
        <div className="downloadContainer" style={{ left: 0 }}>
          <div className="downloadBox">
            <Image
              src="/icon/play.png"
              alt="play_store"
              width={12}
              height={12}
            />
            <div>Download Now</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
