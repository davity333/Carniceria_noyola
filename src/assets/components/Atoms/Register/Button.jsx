function Button({ type, children, className, handerClick}) {
    return (
      <button
        type={type}
        handerClick={handerClick}
        className={`flex w-full justify-center rounded-md bg-red-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${className}`}
      >
        {children}
      </button>
    );
  }
  
  export default Button;