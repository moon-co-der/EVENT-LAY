import { Routes, Route } from "react-router-dom";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import SelectRole from "../pages/auth/SelectRole";

function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/select-role" element={<SelectRole />} />
      <Route path="/register/:role" element={<Register />} />
    </Routes>
  );
}

export default AuthRoutes;
