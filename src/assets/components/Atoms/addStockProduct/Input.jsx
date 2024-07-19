import { forwardRef } from 'react';

const Input = forwardRef(({ id, type, className }, ref) => {
  return (
    <input id={id} type={type} className={className} ref={ref} />
  );
});

export default Input;
