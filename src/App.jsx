import "./App.css";
import Form from "./components/Form.jsx";
import { FormUserName } from "./components/FormUserName.jsx";
import { Instruction } from "./components/Instruction.jsx";

function App() {
  return (
    <div className="App">
      <div className="wrapper__form">
        <div className="wrapper__form-desc">
          <h1 className="wrapper__form-title">Приветствую!</h1>
          <FormUserName />
          <p className="wrapper__form-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
            eum accusantium facilis error alias sint consectetur?
          </p>
        </div>
        <Form />
      </div>
    </div>
  );
}

export default App;
