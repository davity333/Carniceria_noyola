import React, { useRef } from 'react';
import FormField from './FormField';
import Button from '../../Atoms/Register/Button';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { setUser  } from '../../../../../User';
function FormRegister() {
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const nameRef = useRef(null);
  const cellphoneRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log("Form submitted");

    const payload = {
      "name": nameRef.current.value,
      "lastname": lastNameRef.current.value,
      "password": passwordRef.current.value,
      "email": emailRef.current.value,
      "number_phone": cellphoneRef.current.value,
      "created_by": nameRef.current.value,
      "updated_by": nameRef.current.value,
      "role_id_fk": 2
    };

    console.log("Payload:", payload);
    console.log("VITE_URL:", import.meta.env.VITE_URL);

    try {
      const response = await fetch(`${import.meta.env.VITE_URL}/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      console.log("Response status:", response.status);
      console.log("Response status text:", response.statusText);

      if (response.ok) {
        const data = await response.json();
        console.log("Response data:", data);
        localStorage.setItem('token', data.token);
        toast.success('Registro exitoso');
        
      } else {
        const errorData = await response.json();
        console.error('Registration failed:', response.statusText, errorData);
        toast.error('Lo sentimos, intente más tarde');
      }
    } catch (error) {
      console.error('An error occurred:', error);
      toast.error('Ocurrió un error. Intente nuevamente.');
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleRegister}>
      <FormField
        id="email"
        name="email"
        type="email"
        placeholder="ej. jesus@gmail.com"
        autoComplete="email"
        required={true}
        innerRef={emailRef}
        label="Correo electrónico"
      />
      <FormField
        id="name"
        name="name"
        type="text"
        placeholder="ej. Jesús Castillo"
        autoComplete="name"
        required={true}
        innerRef={nameRef}
        label="Nombres"
      />
      <FormField
        id="cellphone"
        name="cellphone"
        type="text"
        placeholder="ej. 96117 983 92"
        autoComplete="tel"
        required={true}
        innerRef={cellphoneRef}
        label="Número de teléfono"
      />
      <FormField
        id="lastname"
        name="lastname"
        type="text"
        placeholder="ej. Ramirez"
        autoComplete="family-name"
        required={true}
        innerRef={lastNameRef}
        label="Apellidos"
      />
      <FormField
        id="password"
        name="password"
        type="password"
        placeholder="Contraseña"
        autoComplete="current-password"
        required={true}
        innerRef={passwordRef}
        label="Contraseña"
      />
      <div>
        <Toaster />
        <Button>
          Registrarse
        </Button>
      </div>
    </form>
  );
}

export default FormRegister;
