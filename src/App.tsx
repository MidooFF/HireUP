import { useEffect, useState, type ReactNode } from "react";
import useFetch from "./hooks/useFetch";
import "./App.css";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar.tsx";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </>
  );
}

export default App;
