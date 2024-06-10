import "./App.css";
import Form from "./components/Form/Form.jsx";
import { FormUserName } from "./components/Form/FormUserName.jsx";

function App() {
  return (
    <div className="app">
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
