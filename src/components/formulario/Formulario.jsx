import React, { useState } from 'react';

const Formulario = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    contraseña: '',
    confirmContraseña: '',
  });

  const [errores, setErrores] = useState({
    nombre: '',
    email: '',
    contraseña: '',
    confirmContraseña: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Limpiar el error cuando el usuario comienza a escribir nuevamente
    setErrores({ ...errores, [name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación de datos
    const nuevosErrores = {};

    if (!formData.nombre) {
      nuevosErrores.nombre = 'El nombre es obligatorio';
    }

    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nuevosErrores.email = 'El correo electrónico no es válido';
    }

    if (formData.contraseña.length < 8) {
      nuevosErrores.contraseña = 'La contraseña debe tener al menos 8 caracteres';
    }

    if (formData.confirmContraseña !== formData.contraseña) {
      nuevosErrores.confirmContraseña = 'Las contraseñas no coinciden';
    }

    // Si hay errores, los establecemos en el estado de errores
    if (Object.keys(nuevosErrores).length > 0) {
      setErrores(nuevosErrores);
    } else {
      // Si no hay errores, el formulario es válido y puedes realizar la acción de registro
      alert('Formulario válido. Realizar la acción de registro aquí.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre:</label>
        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
        {errores.nombre && <span className="error">{errores.nombre}</span>}
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
        {errores.email && <span className="error">{errores.email}</span>}
      </div>
      <div>
        <label>Contraseña:</label>
        <input type="password" name="contraseña" value={formData.contraseña} onChange={handleChange} />
        {errores.contraseña && <span className="error">{errores.contraseña}</span>}
      </div>
      <div>
        <label>Confirmar Contraseña:</label>
        <input type="password" name="confirmContraseña" value={formData.confirmContraseña} onChange={handleChange} />
        {errores.confirmContraseña && <span className="error">{errores.confirmContraseña}</span>}
      </div>
      <button type="submit">Registrarse</button>
    </form>
  );
};

export default Formulario;
  