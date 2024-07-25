import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setUser, getUser } from '../../../../../User';
import toast from 'react-hot-toast';

function Form() {
  const [loading, setLoading] = useState(false);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();
  const [pass, setPass] = useState(''); 
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
      .then((response) => {
        if (response.ok) {
          localStorage.setItem('token', response.headers.get('Authorization'));
          toast.success('Inicio de sesión exitoso')
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

  {/*-----------------------------------------------------------*/}
  const [error, setError] = useState('');

  const handleBlurEmail = () => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const email = emailRef.current.value.trim(); 
  
    if (!email) {
      setError("Por favor, ingrese un correo electrónico.");
    } else if (!regex.test(email)) {
      setError("Ingrese un correo electrónico válido.");
    } else {
      setError("Correo electrónico válido ✓");
    }
  };

  return (
    <>

      <h6>Email</h6>
      <input className='block w-full rounded-md border border-gray-300 py-2 px-3
         text-gray-900 shadow-sm focus:outline-none focus:ring-2
          focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
          type="text" ref={emailRef} 
          placeholder='ej. Usuary@gmail.com'/>    

    <div className='mt-3'>
      <h6>Password</h6>
      <input className='block w-full rounded-md border border-gray-300 py-2 px-3
         text-gray-900 shadow-sm focus:outline-none focus:ring-2
          focus:ring-blue-500 focus:border-blue-500 sm:text-sm' type="password" ref={passwordRef} 
          placeholder='Contraseña'/>
      </div>

    <div className='mt-4'>
      <button className='w-full flex justify-center py-2 px-4 
      border border-transparent rounded-md shadow-sm text-sm font-medium
       text-white bg-[#bc4a3f] hover:bg-[#932828] 
       focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500' 
      onClick={handleLogin}>Iniciar sesión</button>
    </div>  
    </>
  );
}

export default Form;
