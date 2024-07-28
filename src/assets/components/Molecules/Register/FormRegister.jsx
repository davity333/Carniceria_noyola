import React, { useState, useRef } from 'react';
import FormField from './FormField';
import Button from '../../Atoms/Register/Button';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function FormRegister() {
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const nameRef = useRef(null);
  const cellphoneRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const navigate = useNavigate();

  const [errors, setErrors] = useState({
    name: '',
    lastname: '',
    cellphone: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const validateName = () => {
    const regexNumber = /[0-9]/;
    const name = nameRef.current.value.trim();
    const lastname = lastNameRef.current.value.trim();
    let valid = true;
    const newErrors = { ...errors };

    if (regexNumber.test(name)) {
      newErrors.name = "No puedes ingresar números en el nombre";
      valid = false;
    } else {
      newErrors.name = '';
    }

    if (regexNumber.test(lastname)) {
      newErrors.lastname = "No puedes ingresar números en el apellido";
      valid = false;
    } else {
      newErrors.lastname = '';
    }

    setErrors(newErrors);
    return valid;
  };

  const validatePhone = () => {
    const regexRangeNumber = /^\d{10}$/;
    const cellphone = cellphoneRef.current.value;
    let valid = true;
    const newErrors = { ...errors };

    if (!regexRangeNumber.test(cellphone)) {
      newErrors.cellphone = "El número de teléfono debe tener 10 dígitos";
      valid = false;
    } else {
      newErrors.cellphone = '';
    }

    setErrors(newErrors);
    return valid;
  };

  const validateEmail = () => {
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const email = emailRef.current.value;
    let valid = true;
    const newErrors = { ...errors };

    if (!regexEmail.test(email)) {
      newErrors.email = "Correo electrónico no válido";
      valid = false;
    } else {
      newErrors.email = '';
    }

    setErrors(newErrors);
    return valid;
  };

  const validatePassword = () => {
    const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}[^'\s]/;
    const password = passwordRef.current.value;
    let valid = true;
    const newErrors = { ...errors };

    if (!regexPassword.test(password)) {
      newErrors.password = "La contraseña debe tener entre 8 y 15 caracteres, incluir al menos una letra minúscula, una letra mayúscula, un número y un carácter especial ($@$!%*?&). No debe contener espacios ni comillas.";
      valid = false;
    } else {
      newErrors.password = '';
    }

    setErrors(newErrors);
    return valid;
  };

  const validateConfirmPassword = () => {
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;
    let valid = true;
    const newErrors = { ...errors };

    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Las contraseñas no coinciden";
      valid = false;
    } else {
      newErrors.confirmPassword = '';
    }

    setErrors(newErrors);
    return valid;
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!validateName() || !validatePhone() || !validateEmail() || !validatePassword() || !validateConfirmPassword()) {
      return;
    }
    try {
      const response = await fetch(`${import.meta.env.VITE_URL}/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: nameRef.current.value,
          lastname: lastNameRef.current.value,
          password: passwordRef.current.value,
          email: emailRef.current.value,
          number_phone: cellphoneRef.current.value,
          created_by: nameRef.current.value,
          updated_by: nameRef.current.value,
          role_id_fk: 3
        })
      });

      if (response.ok) {
        const data = await response.json();
        toast.success('Registro exitoso');
        navigate('/login');
      } else {
        const errorData = await response.json();
        console.error('Registro fallido:', response.statusText, errorData);
        toast.error('Lo sentimos, intente más tarde');
      }
    } catch (error) {
      console.error('Ocurrió un error:', error);
      toast.error('Ocurrió un error. Intente nuevamente.');
    }
  };

  return (
    <form className="space-y-[2%]" onSubmit={handleRegister}>
      <div>
        <FormField
          id="name"
          name="name"
          type="text"
          placeholder="ej. Jesús Castillo"
          autoComplete="name"
          required={true}
          innerRef={nameRef}
          label="Nombre"
          onBlur={validateName}
        />
        {errors.name && <p className="text-[#ff3737] text-xs font-bold italic text-[10px]">{errors.name}</p>}
      </div>

      <div>
        <FormField
          id="lastname"
          name="lastname"
          type="text"
          placeholder="ej. Ramirez"
          autoComplete="family-name"
          required={true}
          innerRef={lastNameRef}
          label="Apellido"
          onBlur={validateName}
        />
        {errors.lastname && <p className="text-[#ff3737] text-xs font-bold italic text-[10px]">{errors.lastname}</p>}
      </div>

      <div>
        <FormField
          id="cellphone"
          name="cellphone"
          type="text"
          placeholder="ej. 96117 983 92"
          autoComplete="tel"
          required={true}
          innerRef={cellphoneRef}
          label="Número de teléfono"
          onBlur={validatePhone}
        />
        {errors.cellphone && <p className="text-[#ff3737] text-xs font-bold italic text-[10px]">{errors.cellphone}</p>}
      </div>

      <div>
        <FormField
          id="email"
          name="email"
          type="email"
          placeholder="ej. jesus@gmail.com"
          autoComplete="email"
          required={true}
          innerRef={emailRef}
          label="Correo electrónico"
          onBlur={validateEmail}
        />
        {errors.email && <p className="text-[#ff3737] text-xs font-bold italic text-[10px]">{errors.email}</p>}
      </div>

      <div>
        <FormField
          id="password"
          name="password"
          type="password"
          placeholder="Contraseña"
          autoComplete="current-password"
          required={true}
          innerRef={passwordRef}
          label="Contraseña"
          onBlur={validatePassword}
        />
        {errors.password && <p className="text-[#ff3737] text-xs font-bold italic text-[10px]">{errors.password}</p>}
      </div>

      <div>
        <FormField
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          placeholder="Confirme su contraseña"
          autoComplete="new-password"
          required={true}
          innerRef={confirmPasswordRef}
          label="Confirme su contraseña"
          onBlur={validateConfirmPassword}
        />
        {errors.confirmPassword && <p className="text-[#ff3737] text-xs font-bold italic text-[10px]">{errors.confirmPassword}</p>}
      </div>

      <div>
        <Toaster />
        <div className='flex justify-center'>
          <Button>
            Registrarse
          </Button>
        </div>
      </div>
    </form>
  );
}

export default FormRegister;
