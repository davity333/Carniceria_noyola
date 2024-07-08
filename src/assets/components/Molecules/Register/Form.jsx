import FormField from './FormField';
import Button from '../../Atoms/Register/Button';

function Form() {
  return (
    <form className="space-y-6" action="#" method="POST">
      <FormField
        id="email"
        name="email"
        type="email"
        placeholder="ej. jesus@gmail.com"
        autoComplete="email"
        required={true}
        label="Correo electrónico"
      />
      <FormField
        id="password"
        name="password"
        type="password"
        placeholder="Contraseña"
        autoComplete="current-password"
        required={true}
        label="Contraseña"
      />
      <div>
        <Button
          type="submit"
          >
          Iniciar sesión
        </Button>
      </div>
    </form>
  );
}

export default Form;
