
import { useState } from "react";
import Envio from "../envio/envio";

const Formulario = ({ setMyAlert }) => {
  const [datos, setDatos] = useState({
    name: "",
    email: "",
    password: "",
    ConfirmPassword: "",
  });

  const validar = (e) => {
    e.preventDefault();
    const { name, email, password, ConfirmPassword } = datos;
    const DiferentPass = password !== ConfirmPassword
    const SinDatos = !name || !email || !password || !ConfirmPassword
  
    
    SinDatos ? setMyAlert({
        error: true,
        mensaje: "Debe de llenar todos los campos!",
        color:"alert alert-danger mt-3"
      }) :
      setMyAlert({
        error: false,
        mensaje: "Cuenta creada!",
        color:"alert alert-success mt-3"
      })
 
    DiferentPass == true ? setMyAlert({
      error: true,
      mensaje: "Password no son iguales",
      color: "alert alert-danger mt-3"
    }) : null;

    setDatos({
      name: "",
      email: "",
      password: "",
      ConfirmPassword: "",
    });
  };

  const handleChange = (event) => {
    setDatos({ ...datos, [event.target.name]: event.target.value });
  };

  return (
    <form className="f-form" onSubmit={validar}>
      <div className="input-group mb-3">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Nombre"
          onChange={handleChange}
          value={datos.name}
        />
      </div>
      <div className="input-group mb-3">
        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="email@email.com"
          onChange={handleChange}
          value={datos.email}
        />
      </div>
      <div className="input-group mb-3">
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="password"
          onChange={handleChange}
          value={datos.password}
        />
      </div>
      <div className="input-group mb-3">
        <input
          type="password"
          name="ConfirmPassword"
          className="form-control"
          placeholder="confirma password"
          onChange={handleChange}
          value={datos.ConfirmPassword}
        />     
      </div>
      <Envio/>
    </form>
  );
};

export default Formulario;
  