import { Link } from "react-router-dom";
import "../styles/auth.css"; 
import Logo from "../components/Logo";

function Login() {
  return (
    <div className="login-container">
      <div className="login-card">
        <Logo
  title="EVENTLAY"
  subtitle="Sign in to continue."
/>

        <form className="login-form">
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
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