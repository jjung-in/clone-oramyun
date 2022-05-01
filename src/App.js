import React from "react";
import "./reset.scss";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Sticky from "./components/Sticky/Sticky";
import Main from "./pages/Main/Main";

function App() {
  return (
    <BrowserRouter>
      <Sticky />
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
