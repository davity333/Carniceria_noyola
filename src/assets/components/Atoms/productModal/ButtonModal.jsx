function Button({ onClick, children, className, disabled }) {
    return (
      <button onClick={onClick} className={className} disabled={disabled}>
        {children}
      </button>
    );
  }
  
  export default Button;
  