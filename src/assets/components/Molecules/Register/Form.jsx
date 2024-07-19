import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { setUser, getUser } from '../../../../../User';
import toast, { Toaster } from 'react-hot-toast';

function Form() {
  const [loading, setLoading] = useState(false);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
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
      .then((response) => {
        if (response.ok) {
          localStorage.setItem('token', response.headers.get('Authorization'));
          return response.json();
        } else {
          toast.error('Oh, hubo un problema intente más tarde');
          throw new Error('Error en la autenticación');
        }
      })
      .then((data) => {
        const { role_id_fk: rolId, email, user_id, name } = data.user;
        setUser({ rolId, email, user_id, name });
        if (getUser().rolId === 1) {
          navigate('/homeAdmin');
        } else {
          navigate('/');
        }
      })
      .catch((error) => {
        console.error(error);
        toast.error('Uppsss, algo malo ocurrió intente más tarde');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <h6>Email</h6>
      <input type="text" ref={emailRef} />
      <h6>Password</h6>
      <input type="password" ref={passwordRef} />
      <button onClick={handleLogin} disabled={loading}>
        {loading ? 'Cargando...' : 'Iniciar sesión'}
      </button>
      <Toaster />
    </>
  );
}

export default Form;
