import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style/style.css"
import "../src/components/bar/bar.css";
import 'react-toastify/dist/ReactToastify.css';
import { AuthContextProvider } from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>
);
