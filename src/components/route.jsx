import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route as RouteComponent,
} from "react-router-dom";
import Home from "./Home";
import Putadoption from "./Putadoption";
import Donate from "./Donate";
import FindPet from "./FindPet";
import Shopping from "./Shopping";
import Article from "./Article";
import Aboutus from "./Aboutus";
import Quiz from "./Quiz";
import Signup from "./Signup";
import Signin from "./Signin";

const CustomRoute = () => {
  return (
    <div>
      <Router>
        <Routes>
          <RouteComponent path="/" element={<Home />} />
          <RouteComponent path="/Find_a_pet" element={<FindPet />} />
          <RouteComponent path="/put_for_adoption" element={<Putadoption />} />
          <RouteComponent path="/Shopping" element={<Shopping />} />
          <RouteComponent path="/Article" element={<Article />} />
          <RouteComponent path="/Donate" element={<Donate />} />
          <RouteComponent path="/About_us" element={<Aboutus />} />
          <RouteComponent path="/Quiz" element={<Quiz />} />
          <RouteComponent path="/Signup" element={<Signup />} />
          <RouteComponent path="/Signin" element={<Signin />} />
        </Routes>
      </Router>
    </div>
  );
};

export default CustomRoute;
