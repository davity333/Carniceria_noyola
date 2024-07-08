import FormField from './FormField';
import Button from '../../Atoms/reservarMesas/Button';
import toast, { Toaster } from 'react-hot-toast';
function Form() {
  return (
    <form className="space-y-4">
      <FormField
        id="name"
        name="name"
        type="text"
        placeholder="ej. Jesús"
        autoComplete="text"
        required={true}
        label="Nombre del solicitante"
      />
      <FormField
        id="noPeople"
        name="noPeople"
        type="text"
        placeholder="ej. 6"
        autoComplete="current-text"
        required={true}
        label="Número de personas"
      />
      <FormField
        id="date"
        name="date"
        type="datetime-local"
        placeholder=""
        autoComplete="s"
        required={true}
        label="Hora"
      />
         <FormField
        id="amount"
        name="amount"
        type="number"
        placeholder="ej. 6"
        autoComplete="number-current"
        required={true}
        label="Cantidad de mesas"
      />
      
      <div>
        <Button type="submit" onClick={() =>toast.success('Mesa agregada correctamente')
 } children={"Reservar mesa"}></Button>
        <Toaster></Toaster>
      </div>
    </form>
  );
}

export default Form;
