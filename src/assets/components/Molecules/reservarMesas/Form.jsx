import FormField from './FormField';
import Button from '../../Atoms/reservarMesas/Button';
import toast, { Toaster } from 'react-hot-toast';
import { useState } from 'react';
function Form() {
      const [solicitante, setSolcicitante] = useState('');
      const [numero, setNumero] = useState('');
      const [fecha, setFecha] = useState ('');
      const [cantidad, setCantidad] = useState ('');
      const handerReservar = ()=>{
        //----------------------------------------------//
        e.preventDefault (); // preventDefault es para que no se actualice cuando se hace clic en el botón
       

    fetch(`${import.meta.env.VITE_URL}/Reservation`, { // METODO, CABEZARA Y BODY
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*' // ES PARA PERMITIR Y RESTRINGIR QUE DOMINIOS Y SITIOS WEB SON ACCESIBLES
        },
        body: JSON.stringify({
            'name': solicitante,
            'amount': stock,
            'price' : price,
        })
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Error al realizar la solicitud');
        }
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });
  }
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
        value={solicitante}
      />
      <FormField
        id="noPeople"
        name="noPeople"
        type="text"
        placeholder="ej. 6"
        autoComplete="current-text"
        required={true}
        label="Número de personas"
        value={numero}
      />
      <FormField
        id="date"
        name="date"
        type="datetime-local"
        placeholder=""
        autoComplete="s"
        required={true}
        label="Hora"
        value={fecha}
      />
         <FormField
        id="amount"
        name="amount"
        type="number"
        placeholder="ej. 6"
        autoComplete="number-current"
        required={true}
        label="Cantidad de mesas"
        value={cantidad}
      />
      
      <div>
        <Button type="submit" onClick={handerReservar
 } children={"Reservar mesa"}></Button>
        <Toaster></Toaster>
      </div>
    </form>
  );
}

export default Form;
