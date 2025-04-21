import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";
import ChatPage from "./pages/ChatPage";
import ImageGeneratorPage from "./pages/ImageGeneratorPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/image-generator" element={<ImageGeneratorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
