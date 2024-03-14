import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./Signin.css";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

function Signup(props) {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [data, setData] = React.useState({});
  const [admin, isadmin] = React.useState(false);

  const handleData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/petpals/login",
        data
      );
      console.log(res);
      const checkrole = document.querySelector("#Admin").textContent;
      if (checkrole !== res.data.role) {
        if (res.data.success) {
          props.setUid(res.data.uid);
          localStorage.setItem("login", true);
          localStorage.setItem("role", JSON.stringify(res.data.role));

          props.setRole(res.data.role);
          props.isLogin(true);
          toast.success("successfully login");
          setIsLoggedIn(true);
          setData({});
        } else {
          console.log(res.data.message);
          console.log(res.data.success);
        }
      } else {
        toast.error("wrong username or password");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  const handleAdmin = () => {
    document.querySelector("#goSignup").style.display = "none";
    document.querySelector(".btn-resetpassword").style.display = "none";

    if (!admin) {
      document.querySelector("#Admin").textContent = "user";
      return isadmin(true);
    }
    document.querySelector("#goSignup").style.display = "block";
    document.querySelector(".btn-resetpassword").style.display = "block";
    document.querySelector("#Admin").textContent = "admin";
    isadmin(false);
  };

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <div id="main-container-signin">
      <div>
        <button
          id="Admin"
          style={{
            position: "absolute",
            top: "15px",
            right: "40px",
            border: "2px solid black",
            backgroundColor: "aqua",
          }}
          onClick={handleAdmin}
        >
          admin
        </button>
      </div>
      <div id="container-signin">
        <div className="box1"></div>
        <div className="box2">
          <h1 style={{ marginBottom: "30px" }} className="text-3xl">
            welcome to PetPals
          </h1>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <div id="inputfield">
              <TextField
                id="standard-basic"
                label={admin ? "admin id" : "Username or E-mail"}
                variant="standard"
                name="UsernameOrEmail"
                className="input  admin"
                required
                onChange={handleData}
              />
              <TextField
                id="outlined-password-input"
                label={admin ? "admin password" : "Password"}
                type="password"
                autoComplete="current-password"
                variant="standard"
                name="password"
                className="input"
                required
                onChange={handleData}
              />
              <button id="btn" onClick={handleLogin}>
                Sign In
              </button>
            </div>
          </Box>
          <Link to="/forgetpassword">
            <p className="btn-resetpassword">Reset Password</p>
          </Link>
          <span id="span-signin">
            <Link to="/Signup" id="goSignup">
              I don't have an account <b>(Signup)</b>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Signup;
