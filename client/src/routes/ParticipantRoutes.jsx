import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/participant_dashboard/Dashboard";
import ParticipantLayout from "../pages/participant_dashboard/ParticipantLayout";

function ParticipantRoutes() {
  return (
    <Routes>
      <Route element={<ParticipantLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}

export default ParticipantRoutes;
