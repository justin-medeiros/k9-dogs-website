import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import MasterLogin from "../master-account/MasterLogin/MasterLogin";
import ForgotPassword from "../master-account/ForgotPassword/ForgotPassword";
import Master from "../master-account/Master/Master";
import AddDogs from "../master-account/MasterEdit/Adds/AddDogs/AddDogs";
import AddPuppies from "../master-account/MasterEdit/Adds/AddPuppies/AddPuppies";
import AddPhotos from "../master-account/MasterEdit/Adds/AddPhotos/AddPhotos";
import Home from "../website/Home/Home";
import NavBar from "../website/NavBar/NavBar";
import Footer from "../website/Footer/Footer";
import Gallery from "../website/Gallery/Gallery";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>
        <Route path="/master" element={<MasterLogin />}></Route>
        <Route path="/reset" element={<ForgotPassword />} />
        <Route path="/master-edit" element={<Master />} />
        <Route path="/master-edit/addkennel" element={<AddDogs />} />
        <Route path="/master-edit/addpuppies" element={<AddPuppies />} />
        <Route path="/master-edit/addphotos" element={<AddPhotos />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
