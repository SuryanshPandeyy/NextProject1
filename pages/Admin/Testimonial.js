import { Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { mutate } from "swr";
import Swr from "/components/swr";
import AdminCss from "/styles/Admin.module.css";

const Testimonials = () => {
  const data = Swr("testimonials");
  const [deleteMsg, setDeleteMsg] = useState("Delete");

  const showMsg = () => {
    setDeleteMsg("Delete");
  };
  const testimonials = data && data.testimonials;

  return (
    <React.Fragment>
      <div className={AdminCss.container} style={{ }}>
        <div className={AdminCss.table}>
          <h2>Testimonials</h2>
          <ul className={`${AdminCss.tableHeader} ${AdminCss.tableBox}`}>
            <li>Photo</li>
            <li>Title</li> 
            <li>Subtitle</li> 
            <li>Description</li>
            <li>Change</li>
          </ul>
          {testimonials &&
            testimonials.map((item, i) => (
              <ul key={i} className={AdminCss.tableBox}>
                <li>
                  <div className={AdminCss.photo}>
                    {item.file && (
                      <Image
                        src={item.file}
                        alt="testimonials"
                        width={100}
                        height={100}
                      />
                    )}
                  </div>
                </li>
                <li>{item.title}</li>
                <li>{item.subTitle}</li>
                <li>{item.desc.substr(0, 50)}...</li>
                <li>
                  <Link href={`/Admin/Testimonials/${item._id}`} passhref>
                    <Button className={AdminCss.edit}>Edit</Button>
                  </Link>
                  <Button
                    onClick={async (e) => {
                      e.preventDefault();
                      setDeleteMsg("Deleting...");

                      const formdata = {
                        _id: item._id,
                      };

                      await fetch("/api/testimonials", {
                        method: "DELETE",
                        headers: {
                          "Content-Type": "application/json",
                        },
                        body: JSON.stringify(formdata),
                      }).then((res) => {
                        if (res.status === 200) {
                          setDeleteMsg("Deleted");
                          setTimeout(showMsg, 3000);
                          mutate("/api/testimonials");
                        }
                      });
                    }}
                  >
                    {deleteMsg}
                  </Button>
                </li>
              </ul>
            ))}
          <div className={AdminCss.add}>
            <Link href="/Admin/Testimonials" passHref>
              <Button>Add</Button>
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Testimonials;
