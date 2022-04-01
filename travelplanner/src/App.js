import PageRoutes from "./PageRoutes";

import Home from "./Home";
import "./App.css";

import React, { Component } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/routes" element={<PageRoutes/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
