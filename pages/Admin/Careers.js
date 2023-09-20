import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import useSWR, { mutate } from "swr";
import AdminCss from "/styles/Admin.module.css";
import Image from "next/image";
import Swr from "/components/swr";

const SliderList = ({ item }) => {
  const [deleteMsg, setDeleteMsg] = useState("Delete");

  const showMsg = () => {
    setDeleteMsg("Delete");
  };
  return (
    <>
      <ul className={`${AdminCss.tableBox2} ${AdminCss.overflowTable}`}>
        <div>
          <Button
            style={{ background: "red", color: "#fff" }}
            onClick={async (e) => {
              e.preventDefault();
              setDeleteMsg("Deleting...");

              const formdata = {
                _id: item._id,
              };

              await fetch("/api/careers", {
                method: "DELETE",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(formdata),
              }).then((res) => {
                if (res.status === 200) {
                  mutate("/api/careers");
                  setDeleteMsg("Deleted");
                  setTimeout(showMsg, 3000);
                }
              });
            }}
          >
            {deleteMsg}
          </Button>
        </div>
        <li>
          <div className={AdminCss.tableHead}>Email :</div>
          <div
            className={AdminCss.tableBody}
            onClick={() => {
              if (typeof window !== "undefined") {
                navigator.clipboard.writeText(item.email);
              }
            }}
          >
            {item.email}
          </div>
        </li>
        <li>
          <div className={AdminCss.tableHead}>Current Job Openings :</div>
          <div className={AdminCss.tableBody}> {item.job}</div>
        </li>
        <li>
          <div className={AdminCss.tableHead}>First Name :</div>
          <div className={AdminCss.tableBody}> {item.fname}</div>
        </li>
        <li>
          <div className={AdminCss.tableHead}>Last Name :</div>
          <div className={AdminCss.tableBody}> {item.lname}</div>
        </li>
        <li>
          <div className={AdminCss.tableHead}>Phone :</div>
          <div
            href={`tel:${item.phone}`}
            onClick={() => {
              if (typeof window !== "undefined") {
                navigator.clipboard.writeText(item.phone);
              }
            }}
            className={AdminCss.tableBody}
          >
            {item.phone}
          </div>
        </li>
        <li>
          <div className={AdminCss.tableHead}>Resume/CV :</div>
          <a
            href={item.resume}
            target="blank"
            download
            className={AdminCss.tableBody}
          >
            {item.resume}
          </a>
        </li>
        <li>
          <div className={AdminCss.tableHead}>
            Social Media Platforms (Link) :
          </div>
          <a href={item.social} target="blank" className={AdminCss.tableBody}>
            {item.social}
          </a>
        </li>
      </ul>
    </>
  );
};

const Phone = () => {
  const careers = Swr("careers");
  const data = careers?.careers;
  return (
    <>
      <div className={`${AdminCss.table}`}>
        <h2>Careers</h2>
        <br />

        {data && data.map((item, i) => <SliderList key={i} item={item} />)}
      </div>
    </>
  );
};

export default Phone;
