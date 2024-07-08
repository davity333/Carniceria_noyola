function Label({ htmlFor, children, size }) {
    return (
      <label htmlFor={htmlFor} className=" font-bold block text-sm leading-6 text-customColor-came">
        {children}
      </label>
    );
  }
  
  export default Label;
  