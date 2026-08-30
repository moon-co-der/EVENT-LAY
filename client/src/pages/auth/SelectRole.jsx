import AuthCard from "../../components/auth_components/AuthCard";
import Logo from "../../components/auth_components/Logo";
import RoleCard from "../../components/auth_components/RoleCard";

import "../../styles/auth.css";
import "../../styles/role.css";

import { FaBuilding, FaClipboardCheck, FaUserTie } from "react-icons/fa";

const SelectRole = () => {
  return (
    <div className="login-container">
      <AuthCard>
        <Logo title="EVENTLAY" subtitle="Choose your account type" />

        <div className="role-grid">
          <RoleCard
            icon={<FaBuilding size={40} />}
            title="Organizer"
            role="organizer"
          />

          <RoleCard
            icon={<FaClipboardCheck size={40} />}
            title="Volunteer"
            role="volunteer"
          />

          <RoleCard
            icon={<FaUserTie size={40} />}
            title="Client"
            role="client"
          />
        </div>
      </AuthCard>
    </div>
  );
};

export default SelectRole;
