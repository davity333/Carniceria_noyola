import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { setUser, getUser } from '../../../../service/User';
import toast,{Toaster} from 'react-hot-toast';
import FormField from './FormField';
function Form() {
  const [loading, setLoading] = useState(false);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();
  const [pass, setPass] = useState(''); 
  const [email, setEmail] = useState('')
  const [passOk, setPassOk] = useState('')

  const validateFields = () => {
    let isValid = true;
    if (!email) {
      setError('Por favor, rellene el campo de correo electrónico');
      isValid = false;
    } else if (!pass) {
      setPassOk('Por favor, rellene el campo de contraseña');
      isValid = false;
    } else {
      setError('');
    }
    return isValid;
  };

  const keyEmail = (e) => {
    if (e.key === 'Enter') {
      if (!validateFields()) {
        return;
      }
      handleLogin(e);
    }
  };

  useEffect(() => {
    const handleEnterKey = (e) => {
      if (e.key === 'Enter') {
        if (!validateFields()) {
          return;
        }
        handleLogin(e);
      }
    };

    window.addEventListener('keydown', handleEnterKey);

    return () => {
      window.removeEventListener('keydown', handleEnterKey);
    };
  }, [email, pass]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (!validateFields()) {
      return;
    }
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
      } else if (getUser().rolId === 2) {
        navigate('/HomeEmployee');
      } else {
        navigate('/home');
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
  const [valido, setValido] = useState('');

  const handleBlurEmail = () => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const email = emailRef.current.value; 
    if(!regex.test(email)){
      setError("Ingresa un correo valido")
      setValido("")
    }
    else {
      setError('')
      setValido("Correo valido ✓")
    }
  };


  return (
    <>

     <FormField 
     label={"Email"}
     type={"email"}
     placeholder={"ej. Jesus@gmail.com"}
     onBlur={handleBlurEmail}
     required={true}
     innerRef={emailRef}
     autoComplete={"email"}
     name={"email"}
     id={"email"}
     onKeyUp={keyEmail}
     value={email}
     onChange={(e) => setEmail (e.target.value)}
     />
    {error && <p className="text-[#ff3737] text-xs font-bold italic text-[10px]">{error}</p>}
    {valido && <p className="text-[#45a42d] text-xs font-bold italic text-[10px]">{valido}</p>}
    <div className='mt-3'>
      <h6>Password</h6>
      <input className='block w-full rounded-md border border-gray-300 py-2 px-3
         text-gray-900 shadow-sm focus:outline-none focus:ring-2
         focus:ring-blue-500 focus:border-blue-500 sm:text-sm' type="password" ref={passwordRef} 
         placeholder='Contraseña' onKeyUp={keyEmail} value={pass} onChange={(e) => setPass (e.target.value)}/>
      </div>

      {passOk && <p className="text-[#ff3737] text-xs font-bold italic text-[10px]">{passOk}</p>}

    <div className='mt-4'>
      <button className='w-full flex justify-center py-2 px-4 
      border border-transparent rounded-md shadow-sm text-sm font-medium
       text-white bg-[#bc4a3f] hover:bg-[#932828] 
       focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500' 
      onClick={handleLogin}>Iniciar sesión</button>
    </div>  
    <Toaster></Toaster>
    </>
  );
}

export default Form;
