import React from 'react';

function FormField({ id, name, type, placeholder, autoComplete, required, innerRef, label, onBlur,onChange }) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={required}
        ref={innerRef}
        onChange={onChange}
        className=" block w-full rounded-md border border-gray-300 py-2 px-3
         text-gray-900 shadow-sm focus:outline-none focus:ring-2
          focus:ring-blue-500 focus:border-blue-500 
          sm:text-sm sm:w-full sm:flex sm:justify-center "
        onBlur={onBlur}
      />
    </div>
  );
}

export default FormField;
