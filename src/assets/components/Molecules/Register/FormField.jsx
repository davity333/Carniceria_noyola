import { useState } from 'react';
import { BoxIconElement } from 'boxicons';

function FormField({ id, name, type, placeholder, autoComplete, required, innerRef, label, onBlur, onChange }) {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <div className="relative">
        <input
          id={id}
          name={name}
          type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
          placeholder={placeholder}
          autoComplete={autoComplete}
          required={required}
          ref={innerRef}
          onChange={onChange}
          className="block w-full rounded-md border border-gray-300 py-2 px-3 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm sm:w-full sm:flex sm:justify-center"
          onBlur={onBlur}
        />
        {type === 'password' && (
          <button
            type="button"
            onClick={toggleShowPassword}
            className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-600"
          >
            {showPassword ? '👁️' : <box-icon name='low-vision'/>}
          </button>
        )}
      </div>
    </div>
  );
}

export default FormField;
