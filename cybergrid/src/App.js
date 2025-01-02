import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/auth/AdminLogin';
import UserLogin from './pages/auth/UserLogin';
import Dashboard from './pages/main/Dashboard';
import SignUp from './pages/auth/SignUp';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<LoginPage/>} />
          <Route path='/user' element={<UserLogin/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/signup' element={<SignUp/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
