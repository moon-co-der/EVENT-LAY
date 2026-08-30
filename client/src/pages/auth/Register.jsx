import { useParams } from "react-router-dom";
import AuthCard from "../../components/auth_components/AuthCard";
import Logo from "../../components/auth_components/Logo";
import InputField from "../../components/auth_components/InputField";
import Button from "../../components/auth_components/Button";
import "../../styles/auth.css";
import { useState } from "react";
import { registerUser } from "../../api/auth";

const Register = () => {
  const { role } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await registerUser({
        name,
        email,
        password,
        role,
      });

      console.log(response.data);
    } catch (error) {
      console.error(error.response?.data || error.message);
    }
  };
  console.log({
    name,
    email,
    password,
    role,
  });

  return (
    <div className="login-container">
      <AuthCard>
        <Logo title="EVENTLAY" subtitle="Create your account" />

        <div className="selected-role">
          Registering as
          <span> {role.charAt(0).toUpperCase() + role.slice(1)}</span>
        </div>

        <form className="login-form">
          <InputField
            label="Name"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <InputField
            label="Email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <InputField
            label="Password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* <InputField
            label="Confirm Password"
            type="password"
            placeholder="Confirm your password"
          /> */}

          <Button text="Register" type="submit" onClick={handleRegister} />
        </form>
      </AuthCard>
    </div>
  );
};

export default Register;
