import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "/styles/Header.module.css";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import IconButton from "@mui/material/IconButton";
import Image from "next/image";
import { useRouter } from "next/router";
import logo from "/public/logo/logo.png";
import { signOut, useSession } from "next-auth/react";

const Header2 = () => {
  const [menu, setMenu] = useState(false);
  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    if (menu) {
      setMenu(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.asPath]);

  if (status === "loading") {
    return <></>;
  }

  const Pages = [
    { title: "Home", url: "/" },
    {
      title: "Admin",
      url: "/Admin",
    },
    {
      title: "Testimonials",
      url: "/Admin/Testimonial",
    },
    {
      title: "Founder",
      url: "/Admin/Founder",
    },
    {
      title: "Careers",
      url: "/Admin/Careers",
    },
    {
      title: "Callback",
      url: "/Admin/Callback",
    },
  ];

  return (
    <React.Fragment>
      <div className={styles.header}>
        <div className={styles.topHeader}>
          <Link href="/">
            <a className={styles.logo}>
              <div className={styles.logo}>
                <Image
                  src={logo}
                  alt="logo"
                  width="80"
                  height="80"
                  objectFit="contain"
                  loader={({ src, width }) => `${src}/?${width}`}
                />
              </div>
              <h1>Admin Panel</h1>
            </a>
          </Link>
          {status === "authenticated" && (
            <nav className={styles.navigation}>
              {Pages.map((item, i) => (
                <Link key={i} href={item.url}>
                  <a className={styles.link}>
                    <div>{item.title}</div>
                  </a>
                </Link>
              ))}

              <div className={styles.link}>
                <div
                  onClick={async (e) => {
                    e.preventDefault();
                     await signOut({ redirect: false })
                  }}
                >
                  Logout
                </div>
              </div>
            </nav>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header2;
