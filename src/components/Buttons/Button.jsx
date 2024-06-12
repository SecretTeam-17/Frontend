import "./Button.css";

const Button = (props) => {
  return (
    <button type="button" className="button">
      {props.text}
    </button>
  );
};

export { Button };
