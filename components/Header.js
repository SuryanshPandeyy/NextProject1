import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import styles from "/styles/Home.module.css";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import IconButton from "@mui/material/IconButton";
import Image from "next/image";
import { useRouter } from "next/router";
import logo from "/public/logo/logo.png";
import { Button } from "@mui/material";

const Header = ({ handleScroll }) => {
  const [menu, setMenu] = useState(false);
  const router = useRouter();
  const [modal, setModal] = useState(false);
  const [color, setColor] = useState({
    change: false,
    color: "rgba(241, 241, 241, 1)",
  });

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [comment, setComment] = useState("");
  const [msg, setMsg] = useState("Submit");

  const showMsg = () => {
    setMsg("Submit");
  };

  const Pages = [
    { title: "Careers", url: "/" },
    { title: "Partners", url: "/Team" },
    { title: "Get a Callback", url: "/About" },
    {
      title: `Donwload Now`,
      url: "https://play.google.com/store/apps/details?id=com.moneyon.dreams&referrer=MOD559968",
      icon: "/icon/play.png",
      icon2: "/icon/play_white.png",
    },
  ];

  useEffect(() => {
    if (menu) {
      setMenu(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.asPath]);

  const listenScrollEvent = (e) => {
    if (typeof window !== "undefined" && window.scrollY > 520) {
      setColor({ change: true, color: "#194b8c" });
    } else {
      setColor({ change: false, color: "rgba(241, 241, 241, 1)" });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  const submitForm = async (e) => {
    e.preventDefault();

    if (name !== "" && number !== "" && comment !== "") {
      setMsg("Submitting...");

      const formdata = {
        name,
        number,
        comment,
      };
      await fetch("/api/callback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formdata),
      }).then((res) => {
        if (res.status === 200) {
          setMsg("Submitted");
          setTimeout(showMsg, 3000);
          setName("");
          setNumber("");
          setComment("");
        }
      });
    }
  };

  return (
    <React.Fragment>
      <div className={styles.header}>
        {/* <div className={styles.blackHeader}></div> */}
        <div className={styles.topHeader} style={{ background: color.color }}>
          <Link href="/">
            <a className={styles.logoBox}>
              <div className={styles.logo}>
                <Image
                  src={color.change ? "/logo/logo2.png" : "/logo/logo.png"}
                  alt="logo"
                  width="38"
                  height="43"
                  objectFit="contain"
                  loader={({ src, width }) => `${src}/?${width}`}
                />
              </div>
              <div
                className={styles.logoTitle}
                style={color.change ? { color: "#fff" } : {}}
              >
                Money On Dream
              </div>
            </a>
          </Link>
          <nav
            className={
              color.change ? styles.navigationActive : styles.navigation
            }
          >
            {router.asPath !== "/" && (
              <Link href="/">
                <a className={styles.link}>
                  <div className={styles.navLink}>Home</div>
                </a>
              </Link>
            )}
            <Link href="/Careers">
              <a className={styles.link}>
                <div className={styles.navLink}>Careers</div>
              </a>
            </Link>

            <div
              onClick={() => handleScroll("contentRef")}
              className={styles.link}
            >
              <div className={styles.navLink}>Partners</div>
            </div>

            <div className={styles.link}>
              <div onClick={() => setModal(true)} className={styles.navLink}>
                Get a Callback
              </div>
            </div>

            <a
              target="blank"
              href="https://play.google.com/store/apps/details?id=com.moneyon.dreams"
              className={styles.link}
            >
              <div className={styles.navLink}>
                <div className={styles.navIcon}>
                  <div className={styles.navIcon1}>
                    <Image
                      src="/icon/play.png"
                      alt="play_store"
                      width={22}
                      height={22}
                    />
                  </div>
                  <div className={styles.navIcon2}>
                    <Image
                      src="/icon/play_white.png"
                      alt="play_store"
                      width={22}
                      height={22}
                    />
                  </div>
                </div>
                Download Now
              </div>
            </a>
          </nav>
          <div className={styles.mobileNav}>
            <IconButton style={styles.iconButton} onClick={() => setMenu(true)}>
              <AiOutlineMenu
                size="30"
                color="#000"
                className={styles.menuIcon}
              />
            </IconButton>
          </div>
        </div>

        <div
          className={styles.menu}
          style={
            menu
              ? {
                  right: 0,
                }
              : { right: "-100%" }
          }
        >
          <div className={styles.close}>
            <IconButton
              style={styles.iconButton}
              onClick={() => setMenu(false)}
            >
              <AiOutlineClose
                size="40"
                className={styles.menuIcon}
                style={{ color: "#000" }}
              />
            </IconButton>
          </div>
          <div className={styles.menuList}>
            {router.asPath !== "/" && (
              <Link href="/">
                <a className={styles.link}>Home</a>
              </Link>
            )}
            <Link href="/Careers">
              <a className={styles.link}>Careers</a>
            </Link>

            <a
              onClick={() => {
                setMenu(false);
                handleScroll("contentRef");
              }}
              className={styles.link}
            >
              Partners
            </a>

            <a
              onClick={() => {
                setMenu(false);
                setModal(true);
              }}
              className={styles.link}
            >
              Get a Callback
            </a>
          </div>
        </div>
      </div>

      {modal && (
        <div className={styles.modalContainer}>
          <div className={styles.popup} onClick={() => setModal(false)}></div>
          <div className={styles.modalBox}>
            <h2>Get a callback from us</h2>

            <form onSubmit={submitForm}>
              <div className={styles.formBox}>
                <label>Your Name</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="Name"
                  required
                />
              </div>
              <div className={styles.formBox}>
                <label>Phone Number</label>
                <div className={styles.inputBox}>
                  <div className={styles.prefix}>+91</div>
                  <input
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    type="text"
                    placeholder="Phone"
                    required
                  />
                </div>
              </div>
              <div className={styles.formBox}>
                <label>Comments</label>
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  rows={4}
                  type="text"
                  placeholder="Write Your Comments"
                  required
                ></textarea>
              </div>
              <Button type="submit">{msg}</Button>
            </form>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Header;
