import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Animation from "./component/Animation";
import HomePage from "./component/HomePage";
import Login from "./component/Login";
import Notes from "./component/Notes";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Animation />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
