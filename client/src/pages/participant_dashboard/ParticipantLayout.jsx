import { Outlet } from "react-router-dom";
import ParticipantNavbar from "../../components/participants_dashboard/ParticipantNavebar";

function ParticipantLayout() {
  return (
    <div className="participant-layout">
      <ParticipantNavbar />

      <main className="participant-content">
        <Outlet />
      </main>
    </div>
  );
}

export default ParticipantLayout;
