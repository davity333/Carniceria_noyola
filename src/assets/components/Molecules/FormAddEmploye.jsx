import Button from '../Atoms/Register/Button';
import toast, { Toaster } from 'react-hot-toast';
import { useRef, useState } from 'react';
import FormField from './Register/FormField';

function FormAddEmploye() {
  const nameRef = useRef('');
  const lastNameRef = useRef('');
  const passwordRef = useRef('');
  const emailRef = useRef('');
  const phoneRef = useRef('');
  
  const [formValid, setFormValid] = useState({
    name: false,
    lastname: false,
    password: false,
    email: false,
    phone: false,
  });

  const [errorMessages, setErrorMessages] = useState({
    name: '',
    lastname: '',
    password: '',
    email: '',
    phone: '',
  });

  const handerAddEmploye = async (e) => {
    e.preventDefault();
    if (!Object.values(formValid).every(Boolean)) {
      setErrorMessages(prev => ({
        ...prev,
        form: 'Por favor, complete todos los campos correctamente.'
      }));
      return;
    }

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

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token);
        setErrorMessages({
          name: '',
          lastname: '',
          password: '',
          email: '',
          phone: '',
          form: ''
        });
        toast.success('Registro exitoso');
      } else {
        const errorData = await response.json();
        toast.error('Lo sentimos, intente más tarde');
      }
    } catch (error) {
      toast.error('Ocurrió un error. Intente nuevamente.');
    }
  };

  const validateField = (regex, value) => regex.test(value);

  const nameOnBlur = () => {
    const valid = validateField(/^[a-zA-Z]{2,}$/, nameRef.current.value);
    setFormValid(prev => ({ ...prev, name: valid }));
    setErrorMessages(prev => ({
      ...prev,
      name: valid ? '' : 'Nombre inválido'
    }));
  };

  const lastnameOnBlur = () => {
    const valid = validateField(/^[a-zA-Z]{2,}$/, lastNameRef.current.value);
    setFormValid(prev => ({ ...prev, lastname: valid }));
    setErrorMessages(prev => ({
      ...prev,
      lastname: valid ? '' : 'Apellido inválido'
    }));
  };

  const emailOnBlur = () => {
    const valid = validateField(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, emailRef.current.value);
    setFormValid(prev => ({ ...prev, email: valid }));
    setErrorMessages(prev => ({
      ...prev,
      email: valid ? '' : 'Correo electrónico inválido'
    }));
  };

  const phoneOnBlur = () => {
    const valid = validateField(/^\d{10}$/, phoneRef.current.value);
    setFormValid(prev => ({ ...prev, phone: valid }));
    setErrorMessages(prev => ({
      ...prev,
      phone: valid ? '' : 'Número de teléfono inválido'
    }));
  };

  const passwordOnBlur = () => {
    const valid = validateField(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, passwordRef.current.value);
    setFormValid(prev => ({ ...prev, password: valid }));
    setErrorMessages(prev => ({
      ...prev,
      password: valid ? '' : 'Contraseña inválida. Debe tener al menos 8 caracteres, incluyendo letras y números.'
    }));
  };

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
      {errorMessages.name && <p className="text-white">{errorMessages.name}</p>}
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
      {errorMessages.lastname && <p className="text-white">{errorMessages.lastname}</p>}
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
      {errorMessages.password && <p className="text-white">{errorMessages.password}</p>}
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
      {errorMessages.email && <p className="text-white">{errorMessages.email}</p>}
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
      {errorMessages.phone && <p className="text-white">{errorMessages.phone}</p>}
      <div>
        <Button children={"Agregar empleado"} />
      </div>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </form>
  );
}

export default FormAddEmploye;
