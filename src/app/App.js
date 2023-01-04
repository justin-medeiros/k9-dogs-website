import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import MasterLogin from "../master-account/MasterLogin/MasterLogin";
import ForgotPassword from "../master-account/ForgotPassword/ForgotPassword";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/master" element={<MasterLogin />} />
        <Route path="/reset" element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
