import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";

// Create a context for helmet
const helmetContext = {};

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/">
    <HelmetProvider context={helmetContext}>
      <App />
    </HelmetProvider>
  </BrowserRouter>
);