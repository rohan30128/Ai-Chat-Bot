import React from "react";
import { Routes,Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import SignUp from "./component/SignUp";
import Login from "./component/Login";
import Home from "./component/Home";
import { Toaster } from 'react-hot-toast';

export default function App() {
  return (
    <div className="h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Toaster />
    </div>
  );
}
