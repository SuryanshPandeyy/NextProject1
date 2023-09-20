import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import useSWR, { mutate } from "swr";
import AdminCss from "/styles/Admin.module.css";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import Swr from "../swr";

const SliderList = ({ i, item, file, setFile, uploadImage }) => {
  const [deleteMsg, setDeleteMsg] = useState("Delete");
  const [edit, setEdit] = useState(false);
  const [editMsg, setEditMsg] = useState("Edit");

  const showMsg = () => {
    setDeleteMsg("Delete");
    setEditMsg("Edit");
  };

  return (
    <ul className={AdminCss.tableBox}>
      <li>{i + 1}</li>
      <li>
        {edit ? (
          <form
            className=""
            encType="multipart/form-data"
            onSubmit={async (e) => {
              e.preventDefault();
              setEditMsg("Saving...");

              if (file !== "") {
                const imgUrl = await uploadImage(e);

                const formdata = {
                  _id: item._id,
                  file: imgUrl,
                };

                await fetch("/api/products", {
                  method: "PUT",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(formdata),
                }).then((res) => {
                  if (res.status === 200) {
                    setEditMsg("Saved");
                    setTimeout(showMsg, 3000);
                    setFile("");
                    mutate("/api/products");
                    setEdit(false);
                  }
                });
              }
            }}
          >
            <div className="contactInputContainer">
              <input
                name="file"
                id="file"
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>

            <Button disabled={!file} type="submit" className="send">
              {editMsg}
            </Button>
          </form>
        ) : (
          <div className={AdminCss.photo}>
            {item.file && (
              <Image
                src={item.file}
                alt="Services"
                layout="fill"
                objectFit="cover"
              />
            )}
          </div>
        )}
      </li>

      <li>
        <Button onClick={() => setEdit(!edit)} className={AdminCss.edit}>
          {edit ? "Cancel" : "Edit"}
        </Button>

        <Button
          onClick={async (e) => {
            e.preventDefault();
            setDeleteMsg("Deleting...");

            const formdata = {
              _id: item._id,
            };

            await fetch("/api/products", {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(formdata),
            }).then((res) => {
              if (res.status === 200) {
                setDeleteMsg("Deleted");
                setTimeout(showMsg, 3000);
                mutate("/api/products");
              }
            });
          }}
        >
          {deleteMsg}
        </Button>
      </li>
    </ul>
  );
};

const Banner = () => {
  const banner = Swr("products");
  const data = banner && banner.banner;
  const [add, setAdd] = useState(false);
  const [msg, setMsg] = useState("Save");

  const [file, setFile] = useState(null);

  const showMsg = () => {
    setMsg("Save");
  };

  const uploadImage = async (f) => {
    if (file !== null) {
      const formData = new FormData();

      formData.append("file", f);

      formData.append("upload_preset", "moneyondream");
      formData.append("api_key", "529915714396354");
      formData.append("resource_type", "auto");

      const data = await fetch(
        "https://api.cloudinary.com/v1_1/mgtechnicals/auto/upload",
        {
          method: "POST",
          body: formData,
        }
      )
        .then((res) => res.json())
        .catch((error) => error);
      const url = data.secure_url;
      return url;
    }
  };

  const submitForm = async (e) => {
    e.preventDefault();
    
    if (file !== null) {
      setMsg("Saving...");
      const url = [];

      for (let files of file) {
        const imgUrl = await uploadImage(files);
        url.push(imgUrl);
      }

      const formdata = {
        file: url,
      };

      await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formdata),
      }).then((res) => {
        if (res.status === 200) {
          setMsg("Saved");
          setTimeout(showMsg, 3000);
          setFile("");
          mutate("/api/products");
          setAdd(false);
        }
      });
    }
  };

  return (
    <>
      <div className={AdminCss.table}>
        <h2>Products</h2>
        <ul className={`${AdminCss.tableHeader} ${AdminCss.tableBox}`}>
          <li>No.</li>
          <li>Photo</li>
          <li>Change</li>
        </ul>
        {data &&
          data.map((item, i) => (
            <SliderList
              i={i}
              key={i}
              item={item}
              file={file}
              setFile={setFile}
              uploadImage={uploadImage}
            />
          ))}

        {add && (
          <form
            className="contactForm"
            encType="multipart/form-data"
            onSubmit={submitForm}
          >
            <div className="contactInputContainer">
              <input
                name="file"
                id="file"
                type="file"
                multiple
                onChange={(e) => {
                  setFile(e.target.files);
                  console.log(e.target.files);
                }}
              />
            </div>

            <Button disabled={!file} type="submit" className="send">
              {msg}
            </Button>
          </form>
        )}

        <div className={AdminCss.add}>
          <Button onClick={() => setAdd(!add)}>{add ? "Remove" : "Add"}</Button>
        </div>
      </div>
    </>
  );
};

export default Banner;
