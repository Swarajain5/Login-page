import React, { useEffect, useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import cssstyle from './index.css';
import Home from './Home';
import Signup from './Signup';
import Login from './Login';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { auth } from './Firebase';

const App = () => {
  const [username, setusername] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setusername(user.displayName);
      } else {
        setusername("");
      }
      console.log(user);
    });
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home name={username} />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/login/signup" element={<Signup />} />
          <Route exact path="/signup/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
