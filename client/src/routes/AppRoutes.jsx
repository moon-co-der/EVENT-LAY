import { Routes, Route } from "react-router-dom";

import AuthRoutes from "./AuthRoutes";
import ParticipantRoutes from "./ParticipantRoutes";
import OrganizerRoutes from "./OrganizerRoute";
import AdminRoutes from "./AdminRoutes";

function AppRoutes() {
  return (
    <Routes>
      {/* Authentication */}
      <Route path="/*" element={<AuthRoutes />} />

      {/* Participant */}
      <Route path="/participant/*" element={<ParticipantRoutes />} />

      {/* Organizer */}
      <Route path="/organizer/*" element={<OrganizerRoutes />} />

      {/* Admin */}
      <Route path="/admin/*" element={<AdminRoutes />} />
    </Routes>
  );
}

export default AppRoutes;
