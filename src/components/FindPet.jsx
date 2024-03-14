import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Findpet.css";
import { toast } from "react-toastify";
import { CustomFetch } from "../axios/CustionFetch";

const FindPet = (props) => {
  console.log(props);
  const navigate = useNavigate();

  const [cat, setCat] = React.useState([]);
  const [dog, setDog] = React.useState([]);
  const [selectedPet, setSelectedPet] = useState(null);

  React.useEffect(() => {
    CustomFetch.get("/api/form/get")
      .then((res) => {
        console.log(res.data);
        const cats = [];
        const dogs = [];
        res.data.forEach((pet) => {
          const { petType } = pet;
          if (petType === "cat" && !cats.some((c) => c._id === pet._id)) {
            cats.push(pet);
          } else if (
            petType === "dog" &&
            !dogs.some((d) => d._id === pet._id)
          ) {
            dogs.push(pet);
          }
        });
        setCat(cats);
        setDog(dogs);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const handlePetSelect = (pet) => {
    if (!props.login) {
      toast.success("Please login");
      return navigate("/Signin");
    }
    setSelectedPet(pet);
    props.setPetreq(pet);
  };

  const handleBack = () => {
    setSelectedPet(null);
  };

  return (
    <>
      {selectedPet ? (
        <div id="single">
          <div>
            <h1>{selectedPet.petName}</h1>
            <img src={selectedPet.image} alt="photo" />
            <p>Age: {selectedPet.age}</p>
            <p>Pet Type: {selectedPet.petType}</p>
            <p>Description: {selectedPet.description}</p>
            <p>Friendly With Kids: {selectedPet.friendlyWithKids}</p>
            <p>Reason For Adoption: {selectedPet.reasonForAdoption}</p>
            <p>Any Illness: {selectedPet.anyIllness}</p>
            <Link to="/AdoptionForm">
              <button className="btn">Adopt Me</button>
            </Link>

            <button onClick={handleBack} className="btn">
              Back
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div id="all">
            <h1 className="font-bold text-3xl">Choose Your pals</h1>
            <div id="maincontainer">
              <h2 className="font-bold text-2xl">Cats</h2>
              <ul>
                {cat.map((data, index) => (
                  <li key={index} className="items">
                    <img src={data.image} alt={data.breed} className="img" />

                    <p>{data.petName}</p>
                    <p>{data.description}</p>
                    <button
                      className="btn"
                      onClick={() => {
                        handlePetSelect(data);
                      }}
                    >
                      Adopt Me
                    </button>
                  </li>
                ))}
              </ul>

              <h2 className="font-bold text-2xl">Dogs</h2>
              <ul>
                {dog.map((data, index) => (
                  <li key={index} className="items">
                    <img src={data.image} alt={data.breed} className="img" />
                    <p>{data.petName}</p>
                    <p>{data.description}</p>
                    <button
                      className="btn"
                      onClick={() => {
                        handlePetSelect(data);
                      }}
                    >
                      Adopt Me
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FindPet;
