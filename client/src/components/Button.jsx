const Button = ({ text, type = "button", onClick }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="login-btn"
    >
      {text}
    </button>
  );
};

export default Button;