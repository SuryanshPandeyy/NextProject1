import { Button, Divider } from "@mui/material";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { useRouter } from "next/router";
import Swr from "../../../components/swr";

const Testimonials = () => {
  const router = useRouter();
  const { query } = router;

  const data = Swr("testimonials");

  const [fileUrl, setFileUrl] = useState("");
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [msg, setMsg] = useState("Submit");

  useEffect(() => {
    const serviceData = data && data.testimonials;
    const itemData =
      serviceData && serviceData.find((item) => item._id === query.id);
    if (itemData) {
      setFileUrl(itemData.file);
      setTitle(itemData.title);
      setSubTitle(itemData.subTitle);
      setDesc(itemData.desc);
    }
  }, [data, query]);

  const uploadImage = async (e) => {
    e.preventDefault();

    if (file !== null) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "moneyondream");
      formData.append("api_key", "529915714396354");
      formData.append("resource_type", "auto");

      setMsg("Uploading Image");

      const data = await fetch(
        "https://api.cloudinary.com/v1_1/mgtechnicals/auto/upload",
        {
          method: "POST",
          body: formData,
        }
      )
        .then((res) => res.json())
        .catch((error) => error);

      if (data) {
        e.target.value = null;
        setMsg("Image Uploaded");
      }

      const url = data.secure_url;
      return url;
    }
    return null;
  };

  const submitForm = async (e) => {
    e.preventDefault();
    const imgUrl = await uploadImage(e);
    if (title !== "" && subTitle !=="" && desc !== "") {
      setMsg("Saving...")
      const formdata = {
        _id: query.id,
        file: file === null ? fileUrl : imgUrl,
        title,
        subTitle,
        desc,
      };

      await fetch("/api/testimonials", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formdata),
      }).then((res) => {
        if (res.status === 200) {
          router.push("/Admin/Testimonial");
        }
      });
    }
  };

  const inputStyle = { top: "-1.2rem", fontSize: "1.2rem" };

  return (
    <React.Fragment>
      <div className="contactContainer">
        <h1>Testimonials</h1>
        <form
          className="contactForm"
          style={{ flexDirection: "column" }}
          onSubmit={submitForm}
        >
          <div className="contactInputContainer2">
            <label
              htmlFor="file"
              style={file !== "" ? inputStyle : { top: "" }}
            >
              User photo
            </label>
            <input
              name="file"
              id="file"
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>

          <div className="contactInputContainer2">
            <label
              style={title !== "" ? inputStyle : { top: "" }}
              htmlFor="title"
            >
              Title
            </label>
            <input
              name="title"
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="contactInputContainer2">
            <label
              style={subTitle !== "" ? inputStyle : { top: "" }}
              htmlFor="subTitle"
            >
              SubTitle
            </label>
            <input
              name="subTitle"
              id="subTitle"
              type="text"
              value={subTitle}
              onChange={(e) => setSubTitle(e.target.value)}
            />
          </div>

          <div className="contactInputContainer2">
            <label
              style={desc !== "" ? inputStyle : { top: "" }}
              htmlFor="desc"
            >
              Description
            </label>
            <textarea
              name="desc"
              id="desc"
              rows={10}
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            ></textarea>
          </div>

          <Button type="submit" className="send">
            {msg}
          </Button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Testimonials;
