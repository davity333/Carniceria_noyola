function Label({ htmlFor, children }) {
    return (
      <label htmlFor={htmlFor} className="block text-sm font-medium leading-6 text-black">
        {children}
      </label>
    );
  }
  
  export default Label;
  