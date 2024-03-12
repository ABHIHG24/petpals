import axios from "axios";
import React, { useEffect, useState } from "react";
import "./manageuser.css";
import { toast } from "react-toastify";

axios.defaults.withCredentials = true;
const Manageuser = () => {
  const [data, setDate] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/petpals/get")
      .then((res) => {
        console.log(res.data);
        const roleUsers = res.data.filter((item) => item.role === "user");
        setDate(roleUsers);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const Handledelete = (id) => {
    const jwtToken = document.cookie
      .split("; ")
      .find((row) => row.startsWith("jwt="))
      .split("=")[1];
    axios
      .delete(`http://localhost:5000/api/petpals/deletesingle/${id}`, {
        headers: {
          Authorization: `bearer ${jwtToken}`,
        },
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
        toast.success("successfully deleted");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div id="admin-user-container">
      <h1>Manage Users</h1>
      <div id="container-admin">
        <ul>
          {data.map((user) => (
            <li className="user-admin single-user-admin" key={user._id}>
              <img src={user.image} alt="user" />

              <p>Name : {user.Username}</p>
              <p>date-of-birth : {user.dob}</p>
              <p>Email : {user.email}</p>
              <p>country : {user.country}</p>
              <button onClick={() => Handledelete(user._id)}>
                Delete User
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Manageuser;
