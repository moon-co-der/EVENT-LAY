const Button = ({text,type = "button",onClick,disabled = false,}) => {
  return (
    <button
      type={type}
      className="login-btn"
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;