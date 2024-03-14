import { Routes, Route } from "react-router-dom";
import ManageUsers from "./Manageusers";
import AdminNav from "./AdminNav";
import Putadoption from "../components/Putadoption";
import AdoptionRequest from "./AdoptionRequest";
import Result from "./managepet";
import Donation from "./donation";

const AdminRoutes = ({ setRole, isLogin }) => {
  return (
    <div>
      <AdminNav setRole={setRole} isLogin={isLogin} />
      <div className="p-4 sm:ml-64">
        <div className="p-4 ">
          <Routes>
            <Route path="/" element={<Result />} />
            <Route path="/user" element={<ManageUsers />} />
            {/* <Route path="/Home" element={<Manageuser />} /> */}
            <Route path="/put_for_adoption" element={<Putadoption />} />
            <Route path="/AdoptionRequest" element={<AdoptionRequest />} />
            <Route path="/pets" element={<Result />} />
            <Route path="/donation" element={<Donation />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default AdminRoutes;
