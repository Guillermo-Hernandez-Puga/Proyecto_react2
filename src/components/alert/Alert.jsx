

const CustomAlert = ({ info }) => {
  
  return <>
   
    <div className={info.color} >
      <p>
        {info.mensaje}
      </p>
    </div>
    

  </>;
};

export default CustomAlert;