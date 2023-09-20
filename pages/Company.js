import Image from 'next/image';
import React from 'react'

const Company = () => {
  return (
    <div className="companyContainer missionContainer">
      <div className="missionBox companyBox">
        <h1>Our Company</h1>
        <p>
          Money on Dream is a technology enabled platform, where customers are
          helped to choose the right financial product from the right bank or
          NBFC and get all the financial products on a single platform and for
          all those who want to earn more income but the platform If not
          available, future options are provided as a partner where you can earn
          income according to your hard work.
        </p>
      </div>
      <div className="appContainer2">
        <div className="appContent2">
          <div className="appDetails2">
            <p>App is available for free on Google Play</p>
            <p>Join the #JMDfintech</p>
            <div className="downloadContainer" style={{ left: 0, margin: 0 }}>
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
        <div className="appPhone2">
          <Image
            src="/image/phone2.png"
            alt="phone"
            width={380}
            height={550}
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
}

export default Company