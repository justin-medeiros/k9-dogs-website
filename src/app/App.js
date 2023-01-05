import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import MasterLogin from "../master-account/MasterLogin/MasterLogin";
import ForgotPassword from "../master-account/ForgotPassword/ForgotPassword";
import Master from "../master-account/Master/Master";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/master" element={<MasterLogin />} />
        <Route path="/reset" element={<ForgotPassword />} />
        <Route path="/" element={<Master />} />
      </Routes>
    </Router>
  );
}

export default App;
