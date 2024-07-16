import FormField from './FormField';
import Button from '../../Atoms/Register/Button';
import { useRef } from 'react';
function FormRegister() {
  const lastNameRef= useRef('');
  const emailRef= useRef('');
  const nameRef= useRef('');
  const cellphoneRef= useRef('');
  const passwordRef= useRef('');
  const handerRegister = (e) => {
    fetch(`${import.meta.env.VITE_URL_C}/users/`,{
      method:'POST',
      headers: {
          'Content-Type':'application/json',
          'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
          name: nameRef.current.value,
          email: emailRef.current.value,
          password:passwordRef.current.value,
          cellphone: cellphoneRef.current.value,
          lastname: lastNameRef.current.value
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
  }
  return (
    <form className="space-y-6" action="#" method="POST">
      <FormField
        id="email"
        name="email"
        type="email"
        placeholder="ej. jesus@gmail.com"
        autoComplete="email"
        required={true}
        ref={emailRef}
        label="Correo electrónico"
      />
       <FormField
        id="name"
        name="name"
        type="text"
        ref={nameRef}
        placeholder="ej. Jesús Castillo"
        autoComplete="name"
        required={true}
        label="Nombres()"
      />
        <FormField
        id="cellphone"
        name="cellphone"
        type="text"
        ref={cellphoneRef}
        placeholder="ej. 96117 983 92"
        autoComplete="cellphone"
        required={true}
        label="Número de telefono"
      />
       <FormField
        id="lastname"
        name="lastname"
        type="text"
        ref={lastNameRef}
        placeholder="ej. Ramirez"
        autoComplete="cellphone"
        required={true}
        label="Apellidos"
      />
      <FormField
        id="password"
        name="password"
        ref={passwordRef}
        type="password"
        placeholder="Contraseña"
        autoComplete="current-password"
        required={true}
        label="Contraseña"
      />
      <div>
        <Button
          type="submit"
          handerClick={handerRegister}
        >
          Registrarse
        </Button>
      </div>
    </form>
  );
}

export default FormRegister;
