import { useNavigate } from "react-router-dom";

const RoleCard = ({ icon, title, role }) => {
  const navigate = useNavigate();

  return (
    <div
      className="role-card"
      onClick={() => navigate(`/register/${role}`)}
    >
      <div className="role-icon">{icon}</div>

      <h3>{title}</h3>
    </div>
  );
};

export default RoleCard;