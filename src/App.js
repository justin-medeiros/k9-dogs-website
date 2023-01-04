import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import MasterLogin from'./components/MasterLogin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/master' element = {<MasterLogin />}/>
      </Routes>
    </Router>
  );
}

export default App;
