import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/auth.css";
import Logo from "../components/Logo";
import { loginUser } from "../api/auth";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    console.log("Login button clicked");
    console.log({ email, password });

    try {
      const response = await loginUser({
        email,
        password,
      });

      console.log("Response:", response);

      const role = response.data.user?.role || response.data.role;

      switch (role) {
        case "ADMIN":
          navigate("/admin/dashboard");
          break;

        case "EVENT_ORGANIZER":
        case "ORGANIZER":
          navigate("/organizer/dashboard");
          break;

        case "VOLUNTEER":
          navigate("/volunteer/dashboard");
          break;

        case "CLIENT":
          navigate("/client/dashboard");
          break;

        default:
          alert("Unknown user role");
      }
    } catch (error) {
      console.error("Login Error:", error);

      if (error.response) {
        console.error("Status:", error.response.status);
        console.error("Data:", error.response.data);
        alert(error.response.data.message || "Login failed");
      } else {
        alert("Unable to connect to the server.");
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <Logo
          title="EVENTLAY"
          subtitle="Sign in to continue."
        />

        <form className="login-form" onSubmit={handleLogin}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        <p className="bottom-text">
          Don't have an account?{" "}
          <Link to="/select-role">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
