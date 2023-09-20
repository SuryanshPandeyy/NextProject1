import React, { useState } from "react";
import Banner from "components/Admin/Banner";
import Products from "components/Admin/Products";
import Phone from "components/Admin/Phone";
import AdminCss from "/styles/Admin.module.css";
import Heads from "/components/Heads";
const Admin = () => {
  return (
    <>
      <Heads title="Admin Panel" />
      <div className={AdminCss.container}>
        <Phone />
        <Banner />
        <Products />
      </div>
    </>
  );
};

export default Admin;
