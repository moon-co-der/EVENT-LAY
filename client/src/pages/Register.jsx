import { useParams } from "react-router-dom";
import AuthCard from "../components/AuthCard";
import Logo from "../components/Logo";
import InputField from "../components/InputField";
import Button from "../components/Button";
import "../styles/auth.css";

const Register = () => {
  const { role } = useParams();

  return (
    <div className="login-container">
      <AuthCard>

        <Logo
          title="EVENTLAY"
          subtitle="Create your account"
        />

        <div className="selected-role">
          Registering as
          <span>
            {" "}
            {role.charAt(0).toUpperCase() + role.slice(1)}
          </span>
        </div>

        <form className="login-form">
          <InputField
            label="Full Name"
            type="text"
            placeholder="Enter your full name"
          />

          <InputField
            label="Email"
            type="email"
            placeholder="Enter your email"
          />

          <InputField
            label="Password"
            type="password"
            placeholder="Enter your password"
          />

          <InputField
            label="Confirm Password"
            type="password"
            placeholder="Confirm your password"
          />

          <Button
            text="Register"
            type="submit"
          />
        </form>

      </AuthCard>
    </div>
  );
};

export default Register;