import { Button } from "../Button/Button";
import "./Instruction.css";

function Instruction() {
  return (
    <div className="instruction__wrapper">
      <h2 className="instruction__wrapper-title">Инструкция</h2>
      <p className="instruction__wrapper-text">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat eum
        accusantium facilis error alias sint consectetur?
      </p>
      <Button text="далее" />
    </div>
  );
}

export { Instruction };
