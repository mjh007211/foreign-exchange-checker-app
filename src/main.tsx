// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Toaster } from "./ui/sonner.tsx";

createRoot(document.getElementById("root")!).render(
  <>
    <Toaster position="top-center" theme="dark" richColors duration={3000} />
    <App />
  </>,
);
