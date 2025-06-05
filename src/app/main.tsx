import "./index.css";
import "@/shared/i18n";
import App from "./App.tsx";
import { StrictMode } from "react";
import "driver.js/dist/driver.css";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
