import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import Swr from "/components/swr";
import { useRouter } from "next/router";
import Header from "../components/Header";
import useWindowSize from "/hooks/window";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import Heads from "/components/Heads";
import Tilt from "react-parallax-tilt";

const DownloadBox = ({ background, color, icon }) => {
  return (
    <a
      target="blank"
      href="https://play.google.com/store/apps/details?id=com.moneyon.dreams"
      className="downloadContainer"
    >
      <div className={background ? "downloadWhiteBox" : "downloadBox"}>
        <div className="donwloadImg1">
          <Image src="/icon/play.png" alt="play_store" layout="fill" />
        </div>
        {icon ? (
          <div className="donwloadImg2">
            <Image src="/icon/play_blue.png" alt="play_store" layout="fill" />
          </div>
        ) : (
          <div className="donwloadImg2">
            <Image src="/icon/play_white.png" alt="play_store" layout="fill" />
          </div>
        )}
        <div>Download Now</div>
      </div>
    </a>
  );
};

const Home = () => {
  const [tab, setTab] = useState("mission");
  const router = useRouter();
  const [string, setString] = useState(250);

  const { width } = useWindowSize();

  const [offsetY, setOffsetY] = useState(0);
  const handleAnime = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleAnime);
    return () => window.removeEventListener("scroll", handleAnime);
  }, []);

  const phone = Swr("phone");
  const slider = Swr("banner");
  const brands = Swr("products");
  const testimonials = Swr("testimonials");
  const founder = Swr("founder");

  const founderData = founder && founder.testimonials;
  const testimonialsData = testimonials && testimonials.testimonials;
  const brandsData = brands && brands.banner;
  const phoneData = phone && phone.banner;
  const sliderData = slider && slider.banner;

  const downloads = useRef("");
  const products = useRef("");
  const cover = useRef("");
  const sales = useRef("");

  useEffect(() => {
    if (router.pathname === "/" && typeof window !== "undefined") {
      if (downloads.current) {
        let counts = setInterval(updated, 30);
        let upto = 0;

        function updated() {
          var count = downloads.current;
          count.innerHTML = upto += 500;
          if (upto === 50000) {
            clearInterval(counts);
          }
        }
      }
      if (products.current) {
        let counts = setInterval(updated, 80);
        let upto = 0;

        function updated() {
          var count = products.current;
          count.innerHTML = upto += 1;
          if (upto === 50) {
            clearInterval(counts);
          }
        }
      }
      if (cover.current) {
        let counts = setInterval(updated, 50);
        let upto = 0;

        function updated() {
          var count = cover.current;
          count.innerHTML = upto += 100;
          if (upto === 5000) {
            clearInterval(counts);
          }
        }
      }
      if (sales.current) {
        let counts = setInterval(updated, 1000);
        let upto = 0;

        function updated() {
          var count = sales.current;
          count.innerHTML = upto += 1;
          if (upto === 2) {
            clearInterval(counts);
          }
        }
      }
    }
  }, [router]);

  const earnImg = [
    {
      img: "001.png",
      title: "Finance & Banking",
      desc: "You can work anytime & anywhere with us (Money on Dream)",
    },
    {
      img: "002.png",
      title: "Direct Selling Agents",
      desc: "Money On Dream it's like being a one person business.",
    },
    {
      img: "003.png",
      title: "Self Employed",
      desc: "Welcome to the Student worker platform with Money On Dream at the Right Place.",
    },
    {
      img: "004.png",
      title: "Students",
      desc: " The future of women at work from home with money on dream.",
    },
    {
      img: "005.png",
      title: "House Wife",
      desc: ". Golden Opportunity Make sure you can manage a part time Job with Money On Dream.",
    },
    {
      img: "006.png",
      title: "Job Holders",
      desc: "Relationship between first and additional products bundling opportunitiess",
    },
  ];

  const work = [
    {
      img: "001.png",
      img2: "001black.png",
      title: "Zero Investment",
      desc: "Build your direct selling business without any investment",
    },
    {
      img: "002.png",
      img2: "002black.png",
      title: "Best incentives",
      desc: "Get the highest incentives in the market",
    },
    {
      img: "003.png",
      img2: "003black.png",
      title: "Shortest Payout Circle",
      desc: "Receive payout directly in your bank account in shortest time",
    },
    {
      img: "004.png",
      img2: "004black.png",
      title: "Training & Guidance",
      desc: "Get trained by finance and sales experts",
    },
    {
      img: "005.png",
      img2: "005black.png",
      title: "Lifetime Earning",
      desc: "No upper limit so you can control your earnings",
    },
    {
      img: "006.png",
      img2: "006black.png",
      title: "Customer Support",
      desc: "Access tools and content to build relationships with your customers",
    },
  ];

  const contentRef = useRef(null);

  const handleScroll = () => {
    contentRef.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });
  };

  return (
    <>
      <Heads title="Money On Dreams" />
      <Header handleScroll={handleScroll} />
      <div className="container">
        {/* <div className="outline">
        <div className="outline2"></div>
      </div> */}
        <div className=" redClass financeContainer ">
          <Fade>
            <div className="financeBackground">
              <div className="financialImage">
                <Image src="/image/Intersect.png" alt="" layout="fill" />
              </div>
              <div className="financeTitle">
                Become a <br /> Financial Advisor
              </div>
              <div className="financeDesc">
                Earn ₹50,000/-* to ₹1,00,000/-* Every Month
              </div>
              <DownloadBox
                background="#fff"
                color="#194B8C"
                icon="play_blue.png"
              />
              <div className="financeDesc2">
                We are building a complete solution for financial advisors and
                agents to manage and grow their sales and earnings by leveraging
                the power of technology and teamwork.
              </div>
            </div>
          </Fade>
          <Tilt className="financePhone">
            {phoneData?.map((item, i) => (
              <>
                {item.opt === "Image" ? (
                  <Image
                    src={item.file}
                    alt="phone"
                    layout="fill"
                    objectfit="cover"
                  />
                ) : (
                  <video
                    style={{ objectFit: "cover" }}
                    width="100%"
                    height="100%"
                    autoPlay
                    loop
                  >
                    <source src={item.file} type="video/mp4" />
                  </video>
                )}
              </>
            ))}
          </Tilt>
        </div>

        <div className="infoContainer">
          <div>
            <div>
              <p ref={downloads}></p>
              <p>+</p>
            </div>
            <p className="infoCountTitle">Downloads</p>
          </div>
          <div>
            <div>
              <p ref={products}>50</p>
              <p>+</p>
            </div>
            <p className="infoCountTitle">Financial Products</p>
          </div>
          <div>
            <div>
              <p ref={cover}>30</p>
              <p>+</p>
            </div>
            <p className="infoCountTitle">Pin/City Cover</p>
          </div>
          <div>
            <div>
              <p ref={sales}>2</p> <p style={{ marginLeft: 5 }}>Crore</p>
            </div>
            <p className="infoCountTitle">Sales Partner Incentive</p>
          </div>
        </div>

        <div className="earningContainer">
          <div className="earningBox">
            <Tilt className="phone">
              <Image
                src="/image/phone.png"
                alt="phone"
                layout="fill"
                objectFit="cover"
              />
            </Tilt>

            <div className="stepsContainer">
              <div className="heading">
                <h2>Start Earning Only Few Steps</h2>
              </div>
              <div className="stepsBox">
                <Fade right>
                  <p>
                    Download Money On Dream mobile app from google play store.
                  </p>
                </Fade>
                <Fade right>
                  <p>Sign up using your mobile number and email ID.</p>
                </Fade>
                <Fade right>
                  <p>
                    Get training online by sales expert and finance experts.
                  </p>
                </Fade>
                <Fade right>
                  <p>
                    Start recommend the products and earning money from the
                    first.
                  </p>
                </Fade>
              </div>
              <div style={{ position: "relative", left: "-3rem" }}>
                <DownloadBox />
              </div>
            </div>
          </div>
        </div>

        <div className="infoContainer2">
          <div className="infoContainerBox">
            <div className="infoTitleBox">
              <p
                style={
                  tab === "mission" ? { color: "#194B8C" } : { color: "#000" }
                }
                onClick={() => setTab("mission")}
              >
                Our Mission
              </p>
              <p
                style={
                  tab === "story" ? { color: "#194B8C" } : { color: "#000" }
                }
                onClick={() => setTab("story")}
              >
                Our Story
              </p>
              <p
                style={
                  tab === "company" ? { color: "#194B8C" } : { color: "#000" }
                }
                onClick={() => setTab("company")}
              >
                Our Company
              </p>
            </div>
            <Fade>
              <div className="infoDesc">
                {tab === "mission" && (
                  <>
                    <Fade left>
                      <div className="infoQuote">
                        <Image
                          src="/icon/quote.png"
                          alt="quote"
                          layout="fill"
                          objectFit="contain"
                          quality="100"
                        />
                      </div>
                    </Fade>
                    <Fade>
                      <div className="infoDescContent">
                        Money On Dream is a platform dedicated to make the
                        people of India self reliant through financial products
                        through which people can increase their income by
                        assessing the best type of any financial product and
                        make more and more people a self reliant get employment.
                      </div>
                    </Fade>
                    <Fade right>
                      <div className="infoQuote2">
                        <Image
                          src="/icon/quote2.png"
                          alt="quote"
                          layout="fill"
                          objectFit="contain"
                          quality="100"
                        />
                      </div>
                    </Fade>
                  </>
                )}
                {tab === "story" && (
                  <>
                    <Fade left>
                      <div className="infoQuote">
                        <Image
                          src="/icon/quote.png"
                          alt="quote"
                          layout="fill"
                          objectFit="contain"
                          quality="100"
                        />
                      </div>
                    </Fade>
                    <Fade>
                      <div className="infoDescContent">
                        In today&apos;s era, the income of the people is less
                        but the expenses remain much more than the income,
                        whether he is a job worker or a businessman, so he has
                        to resort to financial products and due to lack of time,
                        he is not able to choose the production according to
                        him. Keeping this vision in view, Money on Dream
                        platform was created where people can choose the product
                        as per their choice and at the same time they can help
                        the people around them to make the right choice about it
                        and through this platform their can increase income.
                      </div>
                    </Fade>
                    <Fade right>
                      <div className="infoQuote2">
                        <Image
                          src="/icon/quote2.png"
                          alt="quote"
                          layout="fill"
                          objectFit="contain"
                          quality="100"
                        />
                      </div>
                    </Fade>
                  </>
                )}
                {tab === "company" && (
                  <>
                    <Fade left>
                      <div className="infoQuote">
                        <Image
                          src="/icon/quote.png"
                          alt="quote"
                          layout="fill"
                          objectFit="contain"
                          quality="100"
                        />
                      </div>
                    </Fade>
                    <Fade>
                      <div className="infoDescContent">
                        Money on Dream is a technology enabled platform, where
                        customers are helped to choose the right financial
                        product from the right bank or NBFC and get all the
                        financial products on a single platform and for all
                        those who want to earn more income but the platform If
                        not available, future options are provided as a partner
                        where you can earn income according to your hard work.
                      </div>
                    </Fade>
                    <Fade right>
                      <div className="infoQuote2">
                        <Image
                          src="/icon/quote2.png"
                          alt="quote"
                          layout="fill"
                          objectFit="contain"
                          quality="100"
                        />
                      </div>
                    </Fade>
                  </>
                )}
              </div>
            </Fade>
          </div>
          <Fade>
            <Tilt className="infoImage">
              {tab === "mission" && (
                <Image
                  src="/image/missionImage.png"
                  alt="image"
                  layout="fill"
                  objectFit="cover"
                  priority={true}
                />
              )}
              {tab === "story" && (
                <Image
                  src="/image/missionImage2.png"
                  alt="image"
                  layout="fill"
                  objectFit="cover"
                  priority={true}
                />
              )}
              {tab === "company" && (
                <Image
                  src="/image/missionImage3.png"
                  alt="image"
                  layout="fill"
                  objectFit="cover"
                  priority={true}
                />
              )}
            </Tilt>
          </Fade>
        </div>

        <div className="lineBox">
          <div className="line"></div>
        </div>
        <div className="heading">
          <h2>Self Earning Structure</h2>
        </div>
        <div className="structureContainer">
          <div className="structure">
            <Image
              src="/banners/banner1.png"
              alt="banner"
              width={1440}
              height={384}
              // layout="responsive"
              objectFit="contain"
            />
          </div>
        </div>

        <div className="heading" style={{ marginBottom: 0 }}>
          <h2>Team Earning Structure</h2>
        </div>
        <div className="structureContainer">
          <div className="structure">
            <Image
              src="/banners/banner2.png"
              alt="banner"
              width={1440}
              height={481}
              // layout="responsive"
              objectFit="contain"
            />
          </div>
        </div>

        <div ref={contentRef} className="flexContainer brandContainer">
          <Swiper
            autoplay={{
              delay: 1200,
              disableOnInteraction: false,
            }}
            speed={400}
            modules={[Autoplay]}
            spaceBetween={0}
            slidesPerView={4}
            className="brandsGrid"
          >
            {brandsData?.map((item, i) => (
              <SwiperSlide key={i} className="flexContainer image">
                <div className="imgContainer">
                  <Image
                    src={item.file}
                    alt="work"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            dir="rtl"
            autoplay={{
              delay: 1200,
              disableOnInteraction: false,
            }}
            speed={400}
            modules={[Autoplay]}
            spaceBetween={0}
            slidesPerView={4}
            className="brandsGrid2"
          >
            {brandsData?.map((item, i) => (
              <SwiperSlide key={i} className="flexContainer image">
                <div className="imgContainer">
                  <Image
                    src={item.file}
                    alt="work"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="flexContainer earnContainer">
          <div className="heading">
            <h2>Who can earn with Money On Dream</h2>
          </div>
          <div className="earnContainerBox">
            {earnImg.map((item, i) => (
              <Fade key={i}>
                <Tilt className="earnBox1">
                  <div className="earnBox">
                    <div className="yellowBox2">
                      <div className=" flexContainer image">
                        <Image
                          src={`/icon/${item.img}`}
                          alt="user"
                          width={43}
                          height={52}
                          objectFit="contain"
                        />
                      </div>
                      <div className="desc">{item.desc}</div>
                    </div>
                    <div className="title">{item.title}</div>
                  </div>
                  <div className="yellowBox1"></div>
                </Tilt>
              </Fade>
            ))}
          </div>
        </div>

        <div className="flexContainer workContainer">
          <div className="heading">
            <h2>Why Work With Us</h2>
            <h5>
              Selling financial products is your business, but making you
              succeed at it is ours.
            </h5>
          </div>
          <div className="grid workGrid">
            {work.map((item, i) => (
              <Fade key={i}>
                <div className="workbox">
                  <div className="workBoxImgBox">
                    <div className="flexContainer image">
                      <Image
                        src={`/icon/work/${item.img}`}
                        alt="work"
                        width={35}
                        height={35}
                        objectFit="contain"
                      />
                    </div>
                    <div className="flexContainer imageBlack">
                      <Image
                        src={`/icon/work/${item.img2}`}
                        alt="work"
                        width={35}
                        height={35}
                        objectFit="contain"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="title">{item.title}</div>
                    <div className="desc">{item.desc}</div>
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </div>

        <div className="structureContainer2">
          <Swiper
            autoplay={{
              delay: 1200,
              disableOnInteraction: false,
            }}
            navigation={true}
            loop={true}
            speed={400}
            modules={[Autoplay, Navigation]}
            spaceBetween={0}
            slidesPerView={1}
            className="slider"
          >
            {sliderData?.map((item, i) => (
              <SwiperSlide key={i} className="structure2">
                <Image
                  src={item.file}
                  alt="banner"
                  width={1125}
                  height={352}
                  // layout="fill"
                  objectFit="cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="testimonailsContainer flexContainer">
          <div className="heading">
            <h2>Testimonial</h2>
          </div>
          <div className="testimonialBox">
            <Swiper
              // autoplay={{
              //   delay: 1200,
              //   disableOnInteraction: false,
              // }}
              // navigation={true}
              // speed={400}
              modules={[Autoplay, Navigation]}
              spaceBetween={20}
              centeredSlides={width < 1080 && true}
              slidesPerView={width < 1080 ? 1 : 3}
              className="slider"
            >
              {testimonialsData?.map((item, i) => (
                <SwiperSlide key={i} className="testimonialSlider">
                  <Tilt
                    className="testimonial"
                    style={string === 1000 ? { height: 450 } : { height: 430 }}
                  >
                    <div className="imgContainer">
                      <div className="imgBox testimonialImgBox">
                        <Image
                          src={item.file}
                          alt="work"
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                    </div>
                    <div className="testimonialHeading">
                      <p className="title">{item.title}</p>
                      <p className="desc">{item.subTitle}</p>
                    </div>

                    <div className="subDesc">
                      <div>
                        <Image
                          src="/icon/quote.png"
                          alt="quote"
                          width={30}
                          height={20}
                          objectFit="contain"
                        />
                      </div>
                      <p>
                        {item.desc.substring(0, string)}

                        <span
                          onClick={() =>
                            string === 1000 ? setString(250) : setString(1000)
                          }
                        >
                          {string === 1000 ? "Read Less " : "Read More"}
                        </span>
                      </p>
                    </div>
                  </Tilt>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="heading">
          <h2>Meet Our Founder</h2>
        </div>
        <div className="founderContainer">
          {founderData?.map((item, i) => (
            <Fade key={i}>
              <div className="founderBox">
                <div className="header">
                  <div className="imgContainer">
                    <div className="imgBox">
                      <Image
                        src={item.file}
                        alt="work"
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                  </div>

                  <div className="testimonialHeading">
                    <p className="title">{item.title}</p>
                    <p className="desc">{item.designation}</p>
                  </div>
                </div>
                <div className="footer">{item.desc}</div>
              </div>
            </Fade>
          ))}
        </div>

        <div className="freeSpace"></div>
        <div className="appContainer">
          <Tilt>
            <div className="appPhone">
              <Image
                src="/image/phone2.png"
                alt="phone"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </Tilt>

          <div className="appContent">
            <div className="appDots">
              <Image
                src="/icon/dots.png"
                alt="phone"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <Fade>
              <div className="appDetails">
                <p>App is available for free on Google Play</p>
                <p>Join the #JMDfintech</p>
                <DownloadBox />
              </div>
            </Fade>
          </div>
        </div>
        <div
          className="freeSpace"
          style={{ height: "170px", background: "rgba(233, 233, 233, 1)" }}
        ></div>
      </div>
    </>
  );
};

export default Home;
