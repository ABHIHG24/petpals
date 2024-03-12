import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import "./donation.css";
const Donation = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/payment/get")
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="donations-container">
      <div className="donation-header">
        <h1>Donations</h1>
      </div>
      {data.map((p) => (
        <div className="donation-card" key={p._id}>
          <h2>{p.name}</h2>
          <p>Transaction ID: {p._id}</p>
          <p>Amount: {p.amount}</p>
        </div>
      ))}
    </div>
  );
};

export default Donation;
