

import { useState } from "react";
import CustomAlert from "../alert/Alert";
import Formulario from "../formulario/Formulario";
import SocialButton from "../socialButton/SocialButton";

const Registro = () => {


  const [myAlert, setMyAlert] = useState({
    error: "",
    mensaje: "",
    color:""
  });
  return (
    <main>
      <SocialButton/>
      <Formulario setMyAlert={setMyAlert} />
      
      {myAlert.mensaje && <CustomAlert info={myAlert} />}
  
     </main>
  );
};

export default Registro;