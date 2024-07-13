function Label({ htmlFor, children }) {
    return (
      <label htmlFor={htmlFor} className="block text-sm font-medium leading-6 text-white">
        {children}
      </label>
    );
  }
  
  export default Label;
  