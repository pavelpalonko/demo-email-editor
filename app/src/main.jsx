import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

// styles
import "./index.css";

// components
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/demo-email-editor">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/test" element={<div>TEST</div>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
