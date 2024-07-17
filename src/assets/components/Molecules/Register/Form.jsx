import React, { useRef } from 'react';
import FormField from './FormField';
import Button from '../../Atoms/Register/Button';
import { useNavigate } from 'react-router-dom';

function Form() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    fetch(`${import.meta.env.VITE_URL_C}/users/login`,{
      method:'POST',
      headers: {
          'Content-Type':'application/json',
          'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        email: emailRef.current.value,
        password: passwordRef.current.value,
      })
  })
  .then(response => {
      if (response.ok) {
          localStorage.setItem('token',response.headers.get('Authorization'))
          return response.json()
      }
  })
  .then(data=>{
      navigate('/');
      console.log(data);
      localStorage.setItem('token',data.token)
      
      
  })
  .catch(error=>{
      console.log(error);
  })
  };

  return (
    <>
      <form className="space-y-6" onSubmit={handleLogin}>
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
          <Button>
            Iniciar sesión
          </Button>
        </div>
      </form>
    </>
  );
}

export default Form;
