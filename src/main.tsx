import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Routes, Route } from "react-router";
import { Dashboard } from "./pages/Dashboard.tsx";
import ProtectedRoute from "./components/ProtectedRoute.tsx";
import PublicRoute from "./components/PublicRoute.tsx";
import Produits from "./pages/Produits.tsx";
import ConnectedLayout from "./layouts/ConnectedLayout.tsx";
import Error from "./pages/Error.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="/" element={<App />} />
        </Route>

        <Route element={<ProtectedRoute />}>
          <Route element={<ConnectedLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/produits" element={<Produits />} />
          </Route>
        </Route>

        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
