import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "./Reto12UC";

const LoginPage = () => {
  const [email, setEmail] = useState(useContext);
  const [password, setPassword] = useState(useContext);
  const { login, setLastVisitedPage } = useUser();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    login({
      name: "Sara Ramirez",
      email: email,
    });
    setLastVisitedPage("/home"); 
    navigate("/home");
  };

  return (
    <>
      <div>Registro</div>
      <form onSubmit={handleLogin}>
        {/* ... (your form inputs) */}
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default LoginPage;