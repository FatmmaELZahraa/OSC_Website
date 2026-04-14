// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Playlists from "./pages/Playlists";
import Recruit from "./pages/Recruit";
import Projects from "./pages/Projects";
import Home from "./pages/Home";
import RecruitmentForm from "./pages/RecruitmentForm";
import Events from "./pages/Events";
import CommitteesGrid from "./pages/CommitteesGrid";
import ClosedForm from "./pages/ClosedForm";
import { Toaster } from "sonner";

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-center" richColors />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Recruit" element={<Recruit />} />
        <Route path="/Playlists" element={<Playlists />} />
        <Route path="/apply" element={<RecruitmentForm />} />
        <Route path="/events" element={<Events />} />
        <Route path="/committees/projects" element={<Projects />} />
        <Route path="/committees" element={<CommitteesGrid />} />
        <Route path="/ClosedForm" element={<ClosedForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
