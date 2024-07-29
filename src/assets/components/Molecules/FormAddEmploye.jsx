
import Button from '../Atoms/Register/Button';
import toast, { Toaster } from 'react-hot-toast';
import { useRef } from 'react';
import FormField from './Register/FormField';
function FormAddEmploye() {
  const nameRef = useRef('');
  const lastNameRef = useRef('');
  const passwordRef = useRef('');
  const emailRef = useRef('');
  const phoneRef = useRef('');
  const handerAddEmploye = async (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const lastname = lastNameRef.current.value;
    const password= passwordRef.current.value;
    const email = emailRef.current.value;
    const phone = phoneRef.current.value;
    const payload = {
        "name": name,
        "lastname": lastname,
        "password": password,
        "email": email,
        "number_phone": phone,
        "created_by": name,
        "updated_by": name,
        "role_id_fk": 2
    }

    try {
        const token = localStorage.getItem('token');
        const response = await fetch(`${import.meta.env.VITE_URL}/users`, {     
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        });
  
        console.log("Response status:", response.status);
        console.log("Response status text:", response.statusText);
  
        if (response.ok) {
          const data = await response.json();
          console.log("Response data:", data);
          localStorage.setItem('token',data.token)
          toast.success('Registro exitoso');
          
        } else {
          const errorData = await response.json();
          console.error('Registration failed:', response.statusText, errorData);
          toast.error('Lo sentimos, intente más tarde');
        }
      } catch (error) {
        console.error('An error occurred:', error);
        toast.error('Ocurrió un error. Intente nuevamente.');
        toast.success(name,lastname,password,email,phone)
      }
  };
const nameOnBlur = () => {

}
const lastnameOnBlur = () => {
    
}
const emailOnBlur = () => {
    
}
const phoneOnBlur = () => {
    
}
const passwordOnBlur = () => {
    
}

  return (
    <form className="space-y-4" onSubmit={handerAddEmploye}>
      <FormField
        id="name"
        name="name"
        type="text"
        placeholder="ej. Yesica"
        autoComplete="current-text"
        required={true}
        label="Nombre del empleado:"
        innerRef={nameRef}
        onBlur={nameOnBlur}
      />
      <FormField
        id="lastname"
        name="lastname"
        type="text"
        placeholder="ej. Castillo"
        autoComplete="text-current"
        required={true}
        label="Apellido"
        innerRef={lastNameRef}
        onBlur={lastnameOnBlur}
      />
        <FormField
        id="password"
        name="password"
        type="password"
        placeholder="* * * * * *"
        autoComplete=""
        required={true}
        label="Contraseña"
        innerRef={passwordRef}
        onBlur={passwordOnBlur}
      />
        <FormField
        id="email"
        name="email"
        type="email"
        placeholder="ej. ejemplo@gmail.com"
        autoComplete=""
        required={true}
        label="Correo electronico"
        innerRef={emailRef}
        onBlur={emailOnBlur}
      />
        <FormField
        id="number_phone"
        name="number_phone"
        type="text"
        placeholder="ej. 55 1234 5678"
        autoComplete=""
        required={true}
        label="Teléfono "
        innerRef={phoneRef}
        onBlur={phoneOnBlur}
      />
      <div>
        <Button children={"Agregar empleado"} />
        <Toaster
  position="top-center"
  reverseOrder={false}
/>

      </div>
    </form>
  );
}

export default FormAddEmploye;
