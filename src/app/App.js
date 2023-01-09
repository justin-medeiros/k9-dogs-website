import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import MasterLogin from "../master-account/MasterLogin/MasterLogin";
import ForgotPassword from "../master-account/ForgotPassword/ForgotPassword";
import Master from "../master-account/Master/Master";
import AddDogs from "../master-account/MasterEdit/AddDogs/AddDogs";
import AddPuppies from "../master-account/MasterEdit/AddPuppies/AddPuppies";
import AddPhotos from "../master-account/MasterEdit/AddPhotos/AddPhotos";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/master" element={<MasterLogin />}></Route>
        <Route path="/reset" element={<ForgotPassword />} />
        <Route path="/master-edit" element={<Master />} />
        <Route path="/master-edit/addkennel" element={<AddDogs />} />
        <Route path="/master-edit/addpuppies" element={<AddPuppies />} />
        <Route path="/master-edit/addphotos" element={<AddPhotos />} />
      </Routes>
    </Router>
  );
}

export default App;
