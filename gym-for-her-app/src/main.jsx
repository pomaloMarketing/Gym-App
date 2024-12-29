import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx"; // Main App component
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap styles
import "./index.css"; // Your custom styles

// Render the root of the React app
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
