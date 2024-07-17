import Input from "../../Atoms/Register/Input";

function FormField({ id, name, type, placeholder, autoComplete, required, label, innerRef }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium leading-6 text-gray-700">
        {label}
      </label>
      <div className="mt-2">
          <Input
            id={id}
            name={name}
            type={type}
            placeholder={placeholder}
            autoComplete={autoComplete}
            required={required}
            ref={innerRef}
          />
        
      </div>
    </div>
  );
}

export default FormField;
