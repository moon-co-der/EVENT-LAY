import logo from "../../assets/logo.png";

const Logo = ({ title, subtitle }) => {
  return (
    <div className="logo">
      <div className="logo-circle">
        <img src={logo} alt="EventLay Logo" />
      </div>

      <h1 className="title">{title}</h1>

      <p className="subtitle">{subtitle}</p>
    </div>
  );
};

export default Logo;
