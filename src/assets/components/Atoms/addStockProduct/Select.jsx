import React, { forwardRef } from 'react';

const Select = forwardRef(({ id, className, options }, ref) => {
  return (
    <select id={id} className={className} ref={ref}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
});

export default Select;
