// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Playlists from "./pages/Playlists";
import Recruit from "./pages/Recruit";
import Projects from "./pages/Projects";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Recruit" element={<Recruit />} />
        <Route path="/" element={<Playlists />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;