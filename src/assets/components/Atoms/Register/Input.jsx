import { useRef } from "react";

function Input({ id, name, type, placeholder, autoComplete, required, reff}) {
  reff = useRef('');
    return (
      <input
        id={id}
        name={name}
        type={type}
        ref={reff}
        autoComplete={autoComplete}
        required={required}
        placeholder={placeholder}
        className="block w-full rounded-md border border-gray-300 py-2 px-3 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
      />
    );
  }
  
  export default Input;
  