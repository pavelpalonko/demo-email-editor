import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

// styles
import "./index.css";

// components
import App from "./App.jsx";
import Unlayer from "./unlayer/unlayer.jsx";
import EmailBuilder from "./other/other-info.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/demo-email-editor">
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/unlayer" element={<Unlayer />} />
          <Route path="/grapes" element={<EmailBuilder />} />
          <Route
            path="/other"
            element={
              <div
                style={{
                  marginTop: "24px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "24px",
                }}
              >
                <a href="https://github.com/usewaypoint/email-builder-js">
                  {" "}
                  https://github.com/usewaypoint/email-builder-js
                </a>{" "}
                <a href="https://github.com/zalify/easy-email-editor">
                  {" "}
                  https://github.com/zalify/easy-email-editor
                </a>
              </div>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
