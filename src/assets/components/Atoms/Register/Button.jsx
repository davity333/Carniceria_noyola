import React from 'react';

function Button({ children, onClick }) {
  return (
    <button
      type="submit"
      onClick={onClick}
      className="w-72 mt-[2%] flex justify-center py-2 px-4 border border-transparent rounded-md 
      shadow-sm text-sm font-medium text-white bg-[#bc4a3f] hover:bg-[#932828] 
      focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500
       sm:w-full sm:flex sm:items-center mt-4"
    >
      {children}
    </button>
  );
}

export default Button;
