import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";
import ImageGeneratorPage from "./pages/ImageGeneratorPage";
import ToolsPage from "./pages/ToolsPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/image-generator" element={<ImageGeneratorPage />} />
<Route path="/tools" element={<ToolsPage />} /
      </Routes>
    </Router>
  );
}

export default App;
