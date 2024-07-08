function Button({ type, children, className, onClick }) {
    return (
      <button
        type={type}
        onClick={onClick}
        className={`flex w-full justify-center rounded-md bg-customColor-verde px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${className}`}
      >
        {children}
      </button>
    );
  }
  
  export default Button;