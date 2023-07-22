import './app.scss';

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';

function App() {
  const { currentUser } = useContext(AuthContext)
  const localUser = JSON.parse(localStorage.getItem("user"))
  const ProtectedRoute = ({ children }) => {
    if (!currentUser || !localUser) {
      return <Navigate to="/login" />
    }
    return children
  }
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          } />
        </Routes>
        <Routes>
          <Route index path="/register" element={<Register />} />
        </Routes>
        <Routes>
          <Route index path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
