import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { setUser, getUser } from '../../../../../User';

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
        return response.json();
      }
      throw new Error('Error en la autenticación');
    })
    .then(data => {
      const rolId = data.user.role_id_fk;
      console.log(rolId);
      const email = data.user.email;
      const user_id = data.user.user_id;
      const name = data.user.name;
      setUser({rolId,email,user_id,name});
      if(getUser().rolId===1)
        navigate('/homeAdmin')
      else
      navigate('/')
    })
    .catch(error => {
      console.log(error);
    });
  };

  return (
    <>
      <h6>Email</h6>
      <input type="text" ref={emailRef} />
      <h6>Password</h6>
      <input type="password" ref={passwordRef} />
      <button onClick={handleLogin}>Iniciar sesión</button>
    </>
  );
}

export default Form;
