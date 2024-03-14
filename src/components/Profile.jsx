import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Profile.css";
import { CustomFetch } from "../axios/CustionFetch";

const Profile = (uid) => {
  console.log(uid.uuid);
  const [data, setData] = useState([]);
  useEffect(() => {
    CustomFetch.post("/api/petpals/getSingle", { _id: uid.uuid })
      .then((res) => {
        console.log(res.data);
        const userData = res.data;
        setData([userData]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [uid]);

  return (
    <div id="user-profile">
      <div id="userprofile">
        <h1 className="text-3xl pb-8">Profile</h1>
        <div>
          {data.map((data) => {
            return (
              <div id="single-profile">
                <img src={data.image} alt="err" className="pb-8" />
                <p> Username : {data.Username}</p>
                <p> dob : {data.dob}</p>
                <p> email : {data.email}</p>
                <p> country : {data.country}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Profile;
