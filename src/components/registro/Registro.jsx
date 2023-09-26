

import { useState } from "react";
import CustomAlert from "../alert/Alert";
import Formulario from "../formulario/Formulario";

const Registro = () => {


  const [myAlert, setMyAlert] = useState({
    error: "",
    mensaje: "",
    color:""
  });
  return (
    <main>
      <Formulario setMyAlert={setMyAlert} />
      
      {myAlert.mensaje && <CustomAlert info={myAlert} />}
  
     </main>
  );
};

export default Registro;