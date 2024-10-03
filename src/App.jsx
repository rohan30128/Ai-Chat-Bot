import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <div className="">
      <Navbar />
      <div className="mt-20 mb-24 sm:mb-0">
        <Home />
      </div>

      <Toaster />
    </div>
  );
}
