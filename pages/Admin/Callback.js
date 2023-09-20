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

              await fetch("/api/callback", {
                method: "DELETE",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(formdata),
              }).then((res) => {
                if (res.status === 200) {
                  setDeleteMsg("Deleted");
                  setTimeout(showMsg, 3000);
                  mutate("/api/callback");
                }
              });
            }}
          >
            {deleteMsg}
          </Button>
        </div>
        <li>
          <div className={AdminCss.tableHead}>Name :</div>
          <div className={AdminCss.tableBody}> {item.name}</div>
        </li>

        <li>
          <div className={AdminCss.tableHead}>Phone :</div>
          <a href={`tel:${item.number}`} className={AdminCss.tableBody}>
            {item.number}
          </a>
        </li>

        <li>
          <div className={AdminCss.tableHead}>Comment :</div>
          <div className={AdminCss.tableBody}>{item.comment}</div>
        </li>
      </ul>
    </>
  );
};

const Callback = () => {
  const callback = Swr("callback");
  const data = callback?.callback;
  return (
    <>
      <div className={`${AdminCss.table}`}>
        <h2>Callback</h2>
        <br />

        {data && data.map((item, i) => <SliderList key={i} item={item} />)}
      </div>
    </>
  );
};

export default Callback;
