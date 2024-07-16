import { useState } from "react";
import { useRef } from "react";
function PasswordInput({ id, name, placeholder, autoComplete, required, reff}) {
  reff=useRef('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex items-center border border-gray-300 rounded-md shadow-sm focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500">
      <input
        id={id}
        name={name}
        ref={reff}
        type={showPassword ? "text" : "password"}
        autoComplete={autoComplete}
        required={required}
        placeholder={placeholder}
        className="flex-1 py-2 px-3 text-gray-900 focus:outline-none sm:text-sm"
      />
      <div
        className="px-3 flex items-center cursor-pointer"
        onClick={togglePasswordVisibility}
      >
        {showPassword ? (
          <img src="eyeon.svg" className="h-5 w-5" alt="Show Password" />
        ) : (
          <img src="eyeoff.svg" className="h-5 w-5" alt="Hide Password" />
        )}
      </div>
    </div>
  );
}

export default PasswordInput;
