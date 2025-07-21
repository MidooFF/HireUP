import { useEffect, useState, type ReactNode, createContext } from "react";
import useFetch from "./hooks/useFetch";
import "./App.css";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar.tsx";
import About from "./pages/About/About.tsx";
import Browse from "./pages/Browse/Browse.tsx";

import { SearchProvider } from "./context/SearchContext.tsx";

type contextType = {
  loading: boolean;
  data: any[];
  error: string;
};
export const FetchContext = createContext<contextType>({
  loading: false,
  data: [],
  error: "",
});
function App() {
  return (
    <>
      <SearchProvider>
        <FetchContext.Provider value={useFetch()}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="about" element={<About />}></Route>
            <Route path="browse" element={<Browse />}></Route>
          </Routes>
        </FetchContext.Provider>
      </SearchProvider>
    </>
  );
}

export default App;
