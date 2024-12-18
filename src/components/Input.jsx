import PropTypes from "prop-types";

const Input = ({ id, type, value, placeholder, className, onChange }) => {
  return (
    <>
      <label htmlFor={id}>
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          placeholder={placeholder}
          className={`p-2 rounded-sm ${className}`}
          onChange={onChange}
        />
      </label>
    </>
  );
};

export default Input;

Input.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
