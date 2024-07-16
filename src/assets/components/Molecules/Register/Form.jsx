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
    fetch(`${import.meta.env.VITE_URL}/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        email: emailRef.current.value,
        password: passwordRef.current.value,
      }),
    })
      .then(response => {
        console.log('Response status:', response.status);
        console.log('Response headers:', response.headers); 
        if (response.ok) {
          const token = response.headers.get('Authorization');
          if (token) {
            localStorage.setItem('token', token);
          } else {
            console.warn('El token no se guardó en el header');
          }
          return response.json();
        } else {
          throw new Error('Falló al iniciar sesión');
        }
      })
      .then(data => {
        console.log('Response data:', data);
        navigate('/');
        if (data.token) {
          localStorage.setItem('token', data.token);
        } else {
          console.warn('El token no se encontró en el body');
        }
      })
      .catch(error => {
        console.error('Error durante el login:', error);
      });
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
