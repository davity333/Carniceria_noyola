import React from 'react';

function Button({ children }) {
  return (
    <button
      type="submit"
      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#bc4a3f] hover:bg-[#bd3838] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
    >
      {children}
    </button>
  );
}

export default Button;
