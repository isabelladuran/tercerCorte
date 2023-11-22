import GenericInput from "../../../components/input/GenericInput";
import "./Form.css";

export const Form = () => {
  return (
    <form className="form">
      <div className="form__container">
        <GenericInput label="User" type="text" id="user" />
        <GenericInput label="Correo" type="email" id="correo" />
      </div>
      <GenericInput label="Password" type="password" id="password" />
      <button className="button">Registrate</button>
    </form>
  );
};
