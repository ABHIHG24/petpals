import axios from "axios";
import React, { useEffect, useState } from "react";
import "./managepets.css";
import { toast } from "react-toastify";

const Managepets = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/form/get")
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handledelete = (id) => {
    axios
      .delete(`http://localhost:5000/api/form/deleteSingle/${id}`)
      .then((res) => {
        console.log(res);
        toast.success("successfully deleted");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div id="admin-pet-contanier">
      <h1>manage pets</h1>
      <ul id="container-pets-admin">
        {data.map((pet) => (
          <li className="single-pets-admin">
            <img src={pet.image} alt="err" />
            <p>{pet.petType}</p>
            <p>Name : {pet.petName}</p>
            <p>Age : {pet.age}</p>
            <p>Description : {pet.description}</p>
            <p>Health condition : {pet.anyIllness}</p>
            <p>Kids friendly : {pet.friendlyWithKids}</p>
            <p>reason: {pet.reasonForAdoption}</p>
            <button onClick={() => handledelete(pet._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Managepets;
