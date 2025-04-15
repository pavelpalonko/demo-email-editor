import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

// styles
import "./index.css";

// components
import App from "./App.jsx";
import Unlayer from "./unlayer/unlayer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/demo-email-editor">
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/unlayer" element={<Unlayer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
