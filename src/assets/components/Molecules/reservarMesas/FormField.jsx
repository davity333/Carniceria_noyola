import Label from '../../Atoms/reservarMesas/Label';
import Input from '../../Atoms/reservarMesas/Input';

function FormField({ id, name, type, placeholder, autoComplete, required, label, onChange, value }){
  return (
    <div >
      <Label htmlFor={id}>{label}</Label>
      <div className="mt-2 w-full">
        <Input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          autoComplete={autoComplete}
          required={required}
          onChange={onChange}
          value={value}
        />
      </div>
    </div>
  );
}

export default FormField;
