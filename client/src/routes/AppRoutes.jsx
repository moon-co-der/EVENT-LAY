import { Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import SelectRole from "../pages/SelectRole";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />

      <Route path="/select-role" element={<SelectRole />} />

      {/* Dynamic Route */}
      <Route path="/register/:role" element={<Register />} />
      <Route path="/organizer/dashboard" element={<Dashboard />} />
      <Route path="/volunteer/dashboard" element={<Dashboard />} />
      <Route path="/client/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default AppRoutes;