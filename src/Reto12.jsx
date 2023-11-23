import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserProvider from './Reto12UC'; 
import LoginPage from './Reto12Home';
import HomePage from './Reto12Login';


const Reto12 = () => {
  return (
    <Router>
      <UserProvider>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </UserProvider>
    </Router>
  );
};

export default Reto12;

