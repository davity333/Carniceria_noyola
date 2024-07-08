import React from 'react';

function Input({ id, name, type, placeholder, autoComplete, required }) {
  return (
    <input
      id={id}
      name={name}
      type={type}
      autoComplete={autoComplete}
      required={required}
      placeholder={placeholder}
      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-customColor-border sm:text-sm sm:leading-6"
    />
  );
}

export default Input;
