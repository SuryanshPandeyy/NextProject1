import React, { useState } from "react";
import Button from "@mui/material/Button";
import { signIn } from "next-auth/react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const hide = () => {
    setMsg("");
  };

  const login = async (e) => {
    e.preventDefault();
    setLoading(true);
    await signIn("credentials", {
      redirect: false,
      email,
      password: pwd,
    }).then((res) => {
      setLoading(false);
      if (res.error === "error") {
        setMsg("error");
        setTimeout(hide, 3000);
      }
    });
  };

  const inputStyle = { top: "-1.2rem", fontSize: "1.2rem" };

  return (
    <div className="loginContainer">
      {msg === "error" && "Wrong Credentials"}
      <form
        className="contactForm loginForm"
        encType="multipart/form-data"
        style={{
          flexDirection: "column",
          border: msg === "error" ? ".2rem solid red" : ".2rem solid #194b8c",
        }}
        onSubmit={login}
      >
        <div className="contactInputContainer2">
          <label
            style={email !== "" ? inputStyle : { top: "" }}
            htmlFor="email"
          >
            Enter your Email
          </label>
          <input
            name="email"
            id="email"
            type="text"
            value={email}
            autoComplete="false"
            disabled={loading}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="contactInputContainer2">
          <label style={pwd !== "" ? inputStyle : { top: "" }} htmlFor="pwd">
            Enter your Password
          </label>
          <input
            name="pwd"
            id="pwd"
            type="password"
            autoComplete="false"
            disabled={loading}
            required
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
          />
        </div>

        <Button disabled={loading} type="submit" className="send">
          {loading ? "Loading..." : "Login"}
        </Button>
      </form>
    </div>
  );
};

export default Login;
