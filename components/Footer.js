import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import { BsFacebook, BsYoutube, BsInstagram } from "react-icons/bs";
import { FaTelegramPlane, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import Fade from "react-reveal/Fade";
import useWindowSize from "/hooks/window";

const Footer = () => {
  const router = useRouter();
  const [mobileNo, setMobileNo] = useState("");
  const { width } = useWindowSize();

  const submitApp = async (e) => {
    e.preventDefault();

    if (mobileNo !== "") {
      const formData = {
        mobileNo: `+91${mobileNo}`,
        Message:
          "https://play.google.com/store/apps/details?id=com.moneyon.dreams",
      };

      console.log(formData);

      const data = await fetch("https://moneyondream.com/api/SendLink", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }).then((res) => res.json());

      console.log(data);
    }
  };
  return (
    <>
      <div className={styles.footerContainer}>
        <div className={styles.footer}>
          <div className={styles.footerElement1}>
            <div className={styles.footerImage}>
              <Fade>
                <div className={styles.img1}>
                  <Image
                    src="/image/logo.png"
                    alt="logo"
                    width={132}
                    height={149}
                    objectFit="contain"
                  />
                </div>
              </Fade>
              <div className={styles.img2}>
                <Image
                  src="/logo/logo2.png"
                  alt="logo"
                  width={132}
                  height={149}
                  objectFit="contain"
                />
              </div>
            </div>

            <div className={styles.footerDesc}>
              We are building a complete solution for financial advisors and
              agents to manage and grow their sales and earnings by leveraging
              the power of technology and teamwork.
            </div>
          </div>
          <div className={styles.footerElement2}>
            <Fade>
              <ul className={styles.footerMenu}>
                <div className={styles.footerMenu1}>
                  <Fade left={width < 1080 && true}>
                    <li>
                      <Link href="/About">
                        <a>About Us</a>
                      </Link>
                    </li>
                  </Fade>
                  <Fade left={width < 1080 && true}>
                    <li>
                      <Link href="/Privacy_Policy">
                        <a>Privacy Policy</a>
                      </Link>
                    </li>
                  </Fade>
                  <Fade left={width < 1080 && true}>
                    <li>
                      <Link href="/Terms_Of_Service">
                        <a>Terms of Services</a>
                      </Link>
                    </li>
                  </Fade>
                  <Fade left={width < 1080 && true}>
                    <li>
                      <Link href="/Company-Details">
                        <a>Company Details</a>
                      </Link>
                    </li>
                  </Fade>
                </div>
                <div className={styles.footerMenu2}>
                  <Fade left={width < 1080 && true}>
                    <li>
                      <Link href="/Refund">
                        <a>Refund and Cancellation Policy</a>
                      </Link>
                    </li>{" "}
                  </Fade>
                  <Fade left={width < 1080 && true}>
                    <li>
                      <Link href="/Faq">
                        <a>FAQs</a>
                      </Link>
                    </li>
                  </Fade>
                  <Fade left={width < 1080 && true}>
                    <li>
                      <a
                        href="https://play.google.com/store/apps/details?id=com.moneyon.dreams"
                        className={styles.stars}
                      >
                        4.0
                        <AiFillStar
                          color="#FECD33"
                          size={20}
                          style={{ marginLeft: 4 }}
                        />
                        <AiFillStar
                          color="#FECD33"
                          size={20}
                          style={{ marginLeft: 4 }}
                        />
                        <AiFillStar
                          color="#FECD33"
                          size={20}
                          style={{ marginLeft: 4 }}
                        />
                        <AiFillStar
                          color="#FECD33"
                          size={20}
                          style={{ marginLeft: 4 }}
                        />
                        <AiFillStar size={20} style={{ marginLeft: 4 }} />
                      </a>
                    </li>
                  </Fade>
                </div>
              </ul>
            </Fade>

            <div className={styles.footerContact}>
              <h2>Contact Us</h2>
              <div className={styles.contact}>
                <a href="tel: +919799989693">+91 9799989693</a>{" "}
                <div className={styles.contactLine}></div>{" "}
                <a href="mailto: info@moneyondream.com">
                  info@moneyondream.com
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footerDetail}>
          <div className={styles.footerText}>
            1st Floor, Agrasen Plaza, Near Bus Stand, Kuchaman City, Nagaur
            (Raj.) India - 341508
          </div>
          {router.pathname !== "/About" && (
            <div className="aboutFooter3">
              <form onSubmit={submitApp}>
                <div className="prefix">+91</div>
                <input
                  value={mobileNo}
                  onChange={(e) => setMobileNo(e.target.value)}
                  placeholder="Enter your mobile number"
                />
                <button type="submit">Send app link</button>
              </form>
            </div>
          )}
        </div>
      </div>

      <div className={styles.footer2}>
        <div className={styles.footer2Title}>
          Follow us on social media platforms.
        </div>
        <ul>
          <li>
            <a href="https://www.facebook.com/Moneyondream">
              <Image
                src="/icon/facebook.png"
                alt="social"
                width={30}
                height={30}
              />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/moneyondream/">
              <Image
                src="/icon/instagram.png"
                alt="social"
                width={30}
                height={30}
              />
            </a>
          </li>
          <li>
            <Link href="/">
              <a>
                <Image
                  src="/icon/twitter.png"
                  alt="social"
                  width={30}
                  height={30}
                />
              </a>
            </Link>
          </li>
          <li>
            <a href="https://www.youtube.com/c/Moneyondream">
              <Image
                src="/icon/youtube.png"
                alt="social"
                width={30}
                height={30}
              />
            </a>
          </li>
          <li>
            <a href="https://web.telegram.org/z/#-1785488931">
              <Image
                src="/icon/telegram.png"
                alt="social"
                width={30}
                height={30}
              />
            </a>
          </li>
          <li>
            <Link href="https://www.linkedin.com/company/money-on-dream">
              <a>
                <Image
                  src="/icon/linkedin.png"
                  alt="social"
                  width={30}
                  height={30}
                />
              </a>
            </Link>
          </li>
        </ul>
        <div className={styles.footer2Title}>
          Follow us on social media platforms.
        </div>
      </div>
      <div className={styles.footer3}>
        <div className={styles.footer3Title}>
          <div>Support</div>
          <Image src="/icon/phone.png" alt="icon" width={20} height={20} />
          <div>
            <a href="tel: +919799989693">+91 9799989693</a>
          </div>
        </div>
        <div className={`${styles.footer3Title2} ${styles.footer3Title}`}>
          <div>Support</div>
          <Image src="/icon/@.png" alt="icon" width={20} height={20} />
          <div>
            <a href="mailto: info@moneyondream.com">info@moneyondream.com</a>
          </div>
        </div>
        <div className={styles.footerChat}>
          <div className={styles.footer4Title}>We&apos;re Online!</div>
          <div className={styles.greenDot}></div>
          <a
            href="https://wa.me/+919799989693"
            className={styles.footerChatTitle}
          >
            Chat Now
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
