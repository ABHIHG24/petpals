import React, { useEffect } from "react";
import Signin from "./components/Signin";
import { useNavigate } from "react-router-dom";

const SignInLayout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/Signin");
  }, []);

  return <div></div>;
};

export default SignInLayout;
