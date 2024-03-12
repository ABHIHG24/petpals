import React, { useState, useContext, useEffect } from "react";
import Shoppingdata from "./json/shoppingdata.json";
import "./Shopping.css";
import i1 from "./shopimg/PremiumDogFood.jpeg";
import i2 from "./shopimg/AdjustableDogCollar.jpg";
import i3 from "./shopimg/InteractiveDogToy.jpeg";
import i4 from "./shopimg/SoftDogBed.jpeg";
import i5 from "./shopimg/HealthyCatFood.jpeg";
import i6 from "./shopimg/CatScratchingPost.jpeg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Shopping = (props) => {
  // console.log(props);
  const navigate = useNavigate();
  const [productdata, setProductData] = useState([]);
  const image = [i1, i2, i3, i4, i5, i6];

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/item/get")
      .then((res) => {
        console.log(res.data);
        const data = res.data;

        const filteredData = data.filter((item) => item.uid === props.uid);

        setProductData(filteredData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function HandleCart(data, image) {
    if (!props.login) {
      toast.success("Please login");

      return navigate("/Signin");
    }

    setProductData([...productdata, { ...data, img: image }]);
    console.log(productdata);
    let isDuplicate = false;
    for (const item of productdata) {
      if (item.name === data.name) {
        isDuplicate = true;

        break;
      }
    }

    if (isDuplicate) {
      toast.success("Duplicate item already selected");
      return;
    }

    axios
      .post("http://localhost:5000/api/item/insert", {
        ...data,
        img: image,
        uid: props.uid,
      })
      .then((res) => {
        console.log(res);
        toast.success("successfully added to dashboard");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      <h1 className="text-3xl">Shopping</h1>
      <div id="shopping-container">
        <ul className="item-list">
          {Shoppingdata.map((data, index) => (
            <li key={data.id} className="item">
              <img src={image[index]} alt="err" className="item-image" />
              <div className="item-details">
                <h1>type: {data.type}</h1>
                <p>name: {data.name}</p>
                <p>description: {data.description}</p>
                <p>price_INR : {data.price_INR}</p>
                <button
                  className="btn"
                  onClick={(event) => {
                    HandleCart(data, image[index]);
                  }}
                >
                  Add to Dashboard
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Shopping;
