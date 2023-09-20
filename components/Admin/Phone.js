import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import useSWR, { mutate } from "swr";
import AdminCss from "/styles/Admin.module.css";
import Image from "next/image";
import Swr from "../swr";

const SliderList = ({ item }) => {
  return (
    <ul className={AdminCss.tableBox}>
      <li>
        <div className={AdminCss.photo}>
          {item.opt === "Image" ? (
            item.file && (
              <Image
                src={item.file}
                alt="Phone"
                width={220}
                height={470}
                objectFit="cover"
              />
            )
          ) : (
            <video width='200' height="200" controls loop autoPlay>
              <source src={item.file} type="video/mp4" />
            </video>
          )}
        </div>
      </li>
    </ul>
  );
};

const Phone = () => {
  const banner = Swr("phone");
  const data = banner && banner.banner;
  const [add, setAdd] = useState(false);
  const [msg, setMsg] = useState("Save");
  const [opt, setOpt] = useState("");

  const [file, setFile] = useState();

  const showMsg = () => {
    setMsg("Save");
  };

  const uploadImage = async (e) => {
    e.preventDefault();

    if (file !== null) {
      const formData = new FormData();
      formData.append("file", file);
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
      console.log(data);

      const url = data.secure_url;
      return url;
    }
  };

  const submitForm = async (e) => {
    e.preventDefault();

    if (file !== "" && opt !== "") {
      setMsg("Saving...");
      const imgUrl = await uploadImage(e);

      const formdata = {
        _id: data[0]._id,
        opt,
        file: imgUrl,
      };

      await fetch("/api/phone", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formdata),
      }).then((res) => {
        if (res.status === 200) {
          setMsg("Saved");
          setTimeout(showMsg, 3000);
          setFile("");
          mutate("/api/phone");
          setAdd(false);
        }
      });
    }
  };

  return (
    <>
      <div className={AdminCss.table}>
        <h2>Phone</h2>
        <ul className={`${AdminCss.tableHeader} ${AdminCss.tableBox}`}>
          <li>Photo/Video</li>
          <li>Change</li>
        </ul>
        {data &&
          data.map((item, i) => (
            <SliderList
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
              <select value={opt} onChange={(e) => setOpt(e.target.value)}>
                <option value="" selected disabled>
                  Select
                </option>
                <option value="Image">Image</option>
                <option value="Video">Video</option>
              </select>
              <input
                name="file"
                id="file"
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>

            <Button disabled={!file && !opt} type="submit" className="send">
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

export default Phone;
