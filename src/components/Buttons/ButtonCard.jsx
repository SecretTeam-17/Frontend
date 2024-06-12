import "./ButtonCard.css";

const ButtonCard = (props) => {
  return (
    <button type="button" className="button button--card">
      {props.text}
    </button>
  );
};

export { ButtonCard };
