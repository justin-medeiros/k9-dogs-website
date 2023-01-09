import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import MasterLogin from "../master-account/MasterLogin/MasterLogin";
import ForgotPassword from "../master-account/ForgotPassword/ForgotPassword";
import Master from "../master-account/Master/Master";
import AddDogs from "../master-account/MasterEditItems/AddDogs/AddDogs";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/master" element={<MasterLogin />}></Route>
        <Route path="/reset" element={<ForgotPassword />} />
        <Route path="/master-edit" element={<Master />} />
        <Route path="/master-edit/addkennel" element={<AddDogs />} />
      </Routes>
    </Router>
  );
}

export default App;
