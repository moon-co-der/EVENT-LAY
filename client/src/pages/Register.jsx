import AuthCard from "../components/AuthCard";
import Logo from "../components/Logo";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import "../styles/auth.css";

const Register = () => {
  return (
    <div className="login-container">
      <AuthCard>
        <Logo
          title="EVENTLAY"
          subtitle="Sign up to get started."
        />

        <form className="login-form">
          <InputField
            label="Email"
            name="email"
            type="email"
            placeholder="Enter your email"
          />

          <InputField
            label="Password"
            name="password"
            type="password"
            placeholder="Enter your password"
          />

          <Button
            text="Register"
            type="submit"
          />
        </form>

        <p className="bottom-text">
          Already have an account? <Link to="/">Sign In</Link>
        </p>
      </AuthCard>
    </div>
  );
};

export default Register;