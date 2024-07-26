import React, { useRefN } from 'react';
import FormField from './FormField';
import Button from '../../Atoms/Register/Button';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { setUser  } from '../../../../service/User';
import { useState, useRef } from 'react';
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
      "role_id_fk": 3
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

  {/*---------------------VALIDACIONES--------------------------------*/}
      const [error, setError] = useState('');
      const [errorLast, setErrorLast] = useState('');
      const [errorNumber, setErrorNumber] = useState('');
      const [errorEmail, setSetEmail] = useState('');

      const onBlurName = () => {
      const regexNumber = /[0-9]/; // EVITAR NUMEROS

      const validarNames = nameRef.current.value.trim();
      const validarLast = lastNameRef.current.value.trim();

        if (regexNumber.test(validarNames)) {
          setError("No puedes ingresar números en el nombre");
        } else {
          setError("");
        }

        if (regexNumber.test(validarLast)) {
          setErrorLast("No puedes ingresar números en el nombre");
        } else {
          setErrorLast("");
        }
      } 

        const onBlurPhone = () =>{
          const regexRangeNumber = /^\d{10}$/; //RANGO DE NUMEROS

          const validarNumber = cellphoneRef.current.value;

          if(!regexRangeNumber.test(validarNumber)){
            setErrorNumber("Maximo de digitos 10")
          }else{
            setErrorNumber("");
          }
        }
        const onBlurEmail = () => {
          const regexEmail = /[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}/;
          const validMail = emailRef.current.value;
          
          if(!regexEmail.test(validMail)) {
            toast.error('Por favor, ingrese los correctamente')
          }
          else  {
            toast.success('OK')
          }
        };
        const onBlurPassword = () => {
        const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}[^'\s]/;
        const validPassword  = passwordRef.current.value;
        if(!regexPassword.test(validPassword)){
          toast.error('La contraseña debe tener entre 8 y 15 caracteres, incluir al menos una letra minúscula, una letra mayúscula, un número y un carácter especial ($@$!%*?&). No debe contener espacios ni comillas.')
        }
        else{
          toast.success('OK')
        }
        }

        
      

  {/*-----------------------------------------------------------------*/}

  return (
    <form className="space-y-[2%]" onSubmit={handleRegister}>

      <div className=''>
      <FormField
        id="name"
        name="name"
        type="text"
        placeholder="ej. Jesús Castillo"
        autoComplete="name"
        required={true}
        innerRef={nameRef}
        label="Nombre"
        onBlur={onBlurName}
      />
      </div>
      {error && <p className="text-[#ff3737] text-xs font-bold italic text-[10px]">{error}</p>}

       <div>
       <FormField
        id="lastname"
        name="lastname"
        type="text"
        placeholder="ej. Ramirez"
        autoComplete="family-name"
        required={true}
        innerRef={lastNameRef}
        label="Apellido"
        onBlur={onBlurName}
        />
        </div>
        {errorLast && <p className="text-[#ff3737] text-xs font-bold italic text-[10px]">{errorLast}</p>}

        <div className=''>
        <FormField
        id="cellphone"
        name="cellphone"
        type="text"
        placeholder="ej. 96117 983 92"
        autoComplete="tel"
        required={true}
        innerRef={cellphoneRef}
        label="Número de teléfono"
        onBlur={onBlurPhone}
      />
        </div>
      {errorNumber && <p className="text-[#ff3737] text-xs font-bold italic text-[10px]">{errorNumber}</p>}

      <div>
      <FormField
        id="email"
        name="email"
        type="email"
        placeholder="ej. jesus@gmail.com"
        autoComplete="email"
        required={true}
        innerRef={emailRef}
        label="Correo electrónico"
        onBlur={onBlurEmail}
      />
      </div>
      {errorEmail && <p className="text-[#ff3737] text-xs font-bold italic text-[10px]">{errorEmail}</p>}

      <div>
      <FormField
        id="password"
        name="password"
        type="password"
        placeholder="Contraseña"
        autoComplete="current-password"
        required={true}
        innerRef={passwordRef}
        label="Contraseña"
        onBlur={onBlurPassword}
        
      />
      </div>

      <div>
        <Toaster />

        <div className='flex justify-center'>
        <Button>
          Registrarse
        </Button>
        </div>
      </div>
    </form>
  );
}

export default FormRegister;
