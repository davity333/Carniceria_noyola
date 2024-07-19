
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { setUser, getUser } from '../../../../../User';
import { useState } from 'react';
import toast,{Toaster} from 'react-hot-toast';
function Form() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();
  const [pass, setPass] = useState(''); 
  const handleLogin = (e) => {
    e.preventDefault();

    {/*-----------------------------------------------------------------*/}
    if (!pass.trim()) {
      toast.error('Complete todos los campos')
      return; // Detener el proceso si hay campos vacíos
    }

    {/*-----------------------------------------------------------------*/}

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
      <h6 className='text-[#f1dada]'>Email</h6>
      <input type="text" ref={emailRef} onBlur={handleBlurEmail} className='text-black shadow appearance-none border rounded 
      w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'/>
      
      {error && <p className="text-[#6b1b1b] text-xs italic mt-2 text-[17px]">{error}</p>}


      <h6 className='leading-10 text-[#f1dada]'>Password</h6>

      <input type="password"  ref={passwordRef}  value={pass}
      onChange={(e) => setPass(e.target.value)}
      className='text-black shadow appearance-none border rounded 
      w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'/>

      <div className='flex items-center justify-center m-2'>
      <button onClick={handleLogin} className='bg-[#bc4a3f] px-[35%] py-3 rounded-xl
      hover:bg-[#bd3838]'>Iniciar sesión</button>
      
      </div>
      <Toaster></Toaster>

    </>
  );
}

export default Form;
