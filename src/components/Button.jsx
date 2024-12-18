import PropTypes from "prop-types";

const Button = ({ label, onClick, type, variant }) => {
  const variants = {
    primary: "bg-cyan-500 text-black",
    secondary: "bg-blue-600 text-white",
    warning: "bg-yellow-500 text-black",
    saved: "bg-green-500 text-white",
  };
  const buttonClass = variants[variant] || "";

  return (
    <button
      type={type}
      onClick={onClick}
      className={`p-2 rounded-sm ${buttonClass}`}
    >
      <h1>{label}</h1>
    </button>
  );
};

export default Button;

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  variant: PropTypes.string,
};
