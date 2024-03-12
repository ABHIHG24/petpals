import React from "react";
import "./adminhome.css";
import { Link, useNavigate } from "react-router-dom";

const AdminHome = (props) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    props.setRole("user");
    props.isLogin(false);
    return navigate("/Signin");
  };

  return (
    <div id="side-bar-admin">
      <nav>
        <h1>ADMIN</h1>
        <Link to="/user">
          <h2>Manage user</h2>
        </Link>
        <Link to="/pets">
          <h2>Manage pets</h2>
        </Link>
        <Link to="/AdoptionRequest">
          <h2>Adoption Request</h2>
        </Link>
        <Link to="/put_for_adoption">
          <h2>put_for_adoption</h2>
        </Link>
        <Link to="/Donation">
          <h2>Donation</h2>
        </Link>
        <Link to="/nav1">
          <h2>Donation</h2>
        </Link>

        <h2 onClick={handleLogout} id="admin-logout">
          logout
        </h2>
      </nav>
      <div></div>
    </div>
  );
};

export default AdminHome;
