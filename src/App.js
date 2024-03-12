import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Putadoption from "./components/Putadoption";
import Donate from "./components/Donate";
import FindPet from "./components/FindPet";
import Shopping from "./components/Shopping.jsx";
import Article from "./components/Article";
import Aboutus from "./components/Aboutus";
import Quiz from "./components/Quiz";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Profile from "./components/Profile.jsx";
import Dashboard from "./components/Dashboard.js";
import Messaging from "./components/Messaging.jsx";
import ResetPassowrd from "./components/resetpassword.jsx";
import ResetPassowrd2 from "./components/resetPassword2.jsx";
import Manageuser from "./admin/manageuser.jsx";
import ManageUsers from "./admin/Manageusers.jsx";
import Adminhome from "./admin/adminhome.jsx";
import AdoptionRequest from "./admin/AdoptionRequest.jsx";
import Donation from "./admin/donation.jsx";
import Managepets from "./admin/Managepets.jsx";
import AdoptionForm from "./components/AdoptionForm.jsx";
import { ToastContainer, toast } from "react-toastify";
import AdminNav from "./admin/AdminNav.jsx";
import Result from "./admin/managepet.jsx";
import AdminRoutes from "./admin/AdminRoutes.jsx";

import "./App.css";
import Resetpassword from "./components/resetpassword.jsx";
// const userLogin = localStorage.getItem("login");
// const userRole = JSON.parse(localStorage.getItem("role"));

function App() {
  return (
    <>
      <Router>
        <AppContent />
        <ToastContainer position="top-center" autoClose={2000} />
      </Router>
    </>
  );
}

function AppContent() {
  const location = useLocation();
  // const { pathname } = location;
  // const CheckLogin = localStorage.getItem("login");
  const isLoggedIn = JSON.parse(localStorage.getItem("login"));

  const [uid, setUid] = React.useState(null);
  const [role, setRole] = React.useState("user");
  const [login, isLogin] = React.useState(isLoggedIn);
  const [reqpet, setPetreq] = React.useState(null);
  const isLoginOrSignup =
    location.pathname === "/Signin" || location.pathname === "/Signup";

  return (
    <>
      <div>
        {role === "user" && (
          <>
            {!isLoginOrSignup && <Navbar login={login} isLogin={isLogin} />}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="Home" element={<Home />} />
              <Route path="/Signup" element={<Signup />} />
              <Route
                path="/Find_a_pet"
                element={
                  <FindPet uid={uid} login={login} setPetreq={setPetreq} />
                }
              />

              <Route
                path="/Shopping"
                element={<Shopping uid={uid} login={login} />}
              />
              <Route
                path="/Article"
                element={<Article uid={uid} login={login} />}
              />
              <Route path="/Donate" element={<Donate uid={uid} />} />
              <Route path="/About_us" element={<Aboutus />} />
              <Route path="/Quiz" element={<Quiz />} />
              <Route path="/Signup" element={<Signup />} />
              <Route path="/Profile" element={<Profile uuid={uid} />} />
              <Route path="/Dashboard" element={<Dashboard uid={uid} />} />
              <Route path="/Messaging" element={<Messaging uid={uid} />} />
              <Route path="/forgetpassword" element={<Resetpassword />} />

              <Route
                path="/AdoptionForm"
                element={<AdoptionForm uid={uid} reqpet={reqpet} />}
              />
              <Route
                path="/Signin"
                element={
                  <Signin setUid={setUid} isLogin={isLogin} setRole={setRole} />
                }
              />
              <Route
                path="/resetPassword/:token"
                element={<ResetPassowrd2 />}
              />
            </Routes>
          </>
        )}

        {role === "admin" && (
          <div id="admin">
            <AdminRoutes setRole={setRole} isLogin={isLogin} />
            {/* <Adminhome setRole={setRole} isLogin={isLogin} />
            <Routes>
              <Route path="/" element={<Manageuser />} />
              <Route path="/user" element={<ManageUsers />} />
              <Route
                path="/"
                element={<AdminNav setRole={setRole} isLogin={isLogin} />}
              />
              <Route path="/Home" element={<Manageuser />} />
              <Route path="/put_for_adoption" element={<Putadoption />} />
              <Route path="/AdoptionRequest" element={<AdoptionRequest />} />
              <Route path="/pets" element={<Result />} />
              <Route path="/donation" element={<Donation />} />
            </Routes> */}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
