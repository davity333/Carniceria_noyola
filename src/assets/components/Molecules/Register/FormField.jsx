import Input from '../../Atoms/Register/Input';
import PasswordInput from '../../Atoms/Register/PasswordInput';

function FormField({ id, name, type, placeholder, autoComplete, required, label }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium leading-6 text-gray-700">
        {label}
      </label>
      <div className="mt-2">
        {type === "password" ? (
          <PasswordInput
            id={id}
            name={name}
            placeholder={placeholder}
            autoComplete={autoComplete}
            required={required}
          />
        ) : (
          <Input
            id={id}
            name={name}
            type={type}
            placeholder={placeholder}
            autoComplete={autoComplete}
            required={required}
          />
        )}
      </div>
    </div>
  );
}

export default FormField;
