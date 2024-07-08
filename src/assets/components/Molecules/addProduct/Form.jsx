import FormField from './FormField';
import Button from '../../Atoms/reservarMesas/Button';
import toast, { Toaster } from 'react-hot-toast';
function Form() {
  return (
    <form className="space-y-4">
      <FormField
        id="type"
        name="type"
        type="text"
        placeholder="ej. Carne de lomo"
        autoComplete="text"
        required={true}
        label="Tipo de carne"
      />
      <FormField
        id="price"
        name="price"
        type="text"
        placeholder="ej. 6"
        autoComplete="current-text"
        required={true}
        label="Precio"
      />
      <FormField
        id="stock"
        name="stock"
        type="text"
        placeholder="ej. 7 (kg)"
        autoComplete="current-text"
        required={true}
        label="Stock del producto"
      />
         <FormField
        id="picture"
        name="picture"
        type="file"
        placeholder=""
        autoComplete=""
        required={true}
        label="Subir foto"
      />
      
      <div>
        <Button type="submit" onClick={() =>toast.success('Producto agregado correctamente')
 } children={"Agregar producto"}></Button>
        <Toaster></Toaster>
      </div>
    </form>
  );
}

export default Form;
