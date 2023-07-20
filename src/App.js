import './app.scss';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';

function App() {
  const { currentUser } = useContext(AuthContext)
  console.log(currentUser)
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <Routes>
          <Route index path='/register' element={<Register />} />
        </Routes>
        <Routes>
          <Route index path='/login' element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
