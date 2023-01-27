import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={`${classes.customButton} ${props.className}`}
      type="submit"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
