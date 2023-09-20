import React, { useState } from "react";
import { useRouter } from "next/router";
import { IoIosArrowRoundBack } from "react-icons/io";
import Heads from "/components/Heads";

const Careers = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [phone, setPhone] = useState("");
  const [resume, setResume] = useState(null);
  const [job, setJob] = useState("");
  const [social, setSocial] = useState("");

  const [msg, setMsg] = useState("Submit");
  const msgBox = () => {
    setMsg("Submit");
  };

  const uploadImage = async (e) => {
    e.preventDefault();

    if (resume !== null) {
      const formData = new FormData();
      formData.append("file", resume);
      formData.append("upload_preset", "moneyondream");
      formData.append("api_key", "529915714396354");
      formData.append("resource_type", "auto");

      setMsg("Submitting");

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
      }

      const url = data.secure_url;
      return url;
    }
    return null;
  };

  const submit = async (e) => {
    e.preventDefault();
    const imgUrl = await uploadImage(e);
    if (email !== "") {
      const formdata = {
        email,
        fname,
        lname,
        phone,
        resume: imgUrl,
        job,
        social,
      };

      await fetch("/api/careers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formdata),
      }).then((res) => {
        if (res.status === 200) {
          setMsg("Submitted");
          setTimeout(msgBox, 2000);
          setEmail("");
          setFname("");
          setLname("");
          setPhone("");
          setResume(null);
          setJob("");
          setSocial("");
        }
      });
    } else {
      setMsg("Please Fill The Form");
      setTimeout(msgBox, 2000);
    }
  };
  return (
    <div>
      <Heads title="Money On Dreams : Careers" />
      <div className="careerBox">
        <div className="back" onClick={() => router.back()}>
          <IoIosArrowRoundBack size={30} />
        </div>
        <div className="careerSubBox careerBox1">
          <div className="frame1">
            <h1>Money On Dream Careers</h1>
            <p>
              Location : 1st Floor, Agrasen Plaza, Near Bus Stand, Kuchaman
              City, Nagaur (Raj.) India - 341508
            </p>
          </div>
          <div className="careerline"></div>
          <div className="frame2">
            <div>
              moneyondream8@gmail.com{" "}
              <div className="switch">Switch account</div>
            </div>
            <p>
              The name and photo associated with your Google account will be
              recorded when you upload files and submit this form. Only the
              email you enter is part of your response.
            </p>
            <p>* Required</p>
          </div>
        </div>

        <form className="careerForm" onSubmit={submit}>
          <div className="careerSubBox">
            <label>Email *</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              required
            />
          </div>
          <div className="careerSubBox">
            <label>Current Job Openings *</label>
            <select value={job} onChange={(e) => setJob(e.target.value)}>
              <option value="0" selected>
                Choose
              </option>
            </select>
          </div>

          <div className="careerSubBox">
            <label>First Name*</label>
            <input
              value={fname}
              onChange={(e) => setFname(e.target.value)}
              placeholder="Your Answer"
              required
            />
          </div>

          <div className="careerSubBox">
            <label>Last Name*</label>
            <input
              value={lname}
              onChange={(e) => setLname(e.target.value)}
              placeholder="Your Answer"
              required
            />
          </div>

          <div className="careerSubBox">
            <label>Phone *</label>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Your Answer"
              required
            />
          </div>

          <div className="careerSubBox">
            <label>Resume/CV *</label>
            <label htmlFor="file" className="file">
              Add File
            </label>
            <input
              onChange={(e) => setResume(e.target.files[0])}
              id="file"
              type="file"
              style={{ display: "none" }}
              required
            />
          </div>

          <div className="careerSubBox">
            <label>Social Media Platforms (Link)</label>
            <input
              value={social}
              onChange={(e) => setSocial(e.target.value)}
              placeholder="Your Answer"
            />
          </div>

          <div className="careerSubmit">
            <button type="submit">{msg}</button>
          </div>
        </form>

        <div className="warn">Never submit passwords through Google Forms.</div>
        <div className="report">
          This form was created inside of moneyondream.com. Report Abuse
        </div>
      </div>
    </div>
  );
};

export default Careers;
