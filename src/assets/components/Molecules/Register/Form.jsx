import FormField from './FormField';
import Button from '../../Atoms/Register/Button';
import { useRef } from 'react';

function Form() {
  const emailRef = useRef('');
  const passwordRef = useRef('')
  const handerLogin = (e) => {
    fetch(`${import.meta.env.VITE_URL}/users/login`,{
      method:'POST',
      headers: {
          'Content-Type':'application/json',
          'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
          email: emailRef.current.value,
          password:passwordRef.current.value
      })
  })
  .then(response => {
      if (response.ok) {
          localStorage.setItem('token',response.headers.get('Authorization'))
          return response.json()
      }
  })
  .then(data=>{
      console.log(data);
      
      localStorage.setItem('token',data.token)
      
  })
  .catch(error=>{
      console.log(error);
  })
  e.preventDefault();
  }
  return (
    <>
    <form className="space-y-6">
      <FormField
        id="email"
        name="email"
        type="email"
        placeholder="ej. jesus@gmail.com"
        autoComplete="email"
        required={true}
        reff={emailRef}
        label="Correo electrónico"
      />
      <FormField
        id="password"
        name="password"
        type="password"
        placeholder="Contraseña"
       reff={passwordRef}
        autoComplete="current-password"
        required={true}
        label="Contraseña"
      />
      <div>
        <Button
          handerClick={handerLogin}
          >
          Iniciar sesión
        </Button>
      </div>
    </form>
    </>
  );
}

export default Form;
