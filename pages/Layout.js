import { useRouter } from "next/router";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Header2 from "../components/Admin/Header";
import { useSession } from "next-auth/react";
import Login from "./Admin/Login";

const Layout = ({ children }) => {
  const { data: session, status } = useSession();

  {
    status === "loading" && <></>;
  }

  const router = useRouter();
  console.log(router);
  return (
    <React.Fragment>
      {router.pathname === "/" ? (
        <>
          <main className="main">{children}</main>
          <Footer />
        </>
      ) : (
        <>
          {router.pathname.includes("/Admin") ? (
            <>
              {status === "loading" ? (
                <>Loading</>
              ) : status === "authenticated" ? (
                <>
                  <Header2 />
                  <main className="main">{children}</main>
                </>
              ) : (
                <Login />
              )}
            </>
          ) : (
            <>
              {router.pathname === "/Careers" || router.pathname === "/Faq" ? (
                <main className="main">{children}</main>
              ) : (
                <>
                  <Header />
                  <main className="main">{children}</main>
                  <Footer />
                </>
              )}
            </>
          )}
        </>
      )}
    </React.Fragment>
  );
};

export default Layout;
