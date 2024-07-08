import FormField from './FormField';
import Button from '../../Atoms/Register/Button';
function FormRegister() {
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
        id="name"
        name="name"
        type="text"
        placeholder="ej. Jesús Castillo"
        autoComplete="name"
        required={true}
        label="Nombre completo"
      />
        <FormField
        id="cellphone"
        name="cellphone"
        type="text"
        placeholder="ej. 96117 983 92"
        autoComplete="cellphone"
        required={true}
        label="Número de telefono"
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
          Registrarse
        </Button>
      </div>
    </form>
  );
}

export default FormRegister;
