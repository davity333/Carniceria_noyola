import FormField from './FormField';
import Button from '../../Atoms/reservarMesas/Button';
import toast, { Toaster } from 'react-hot-toast';
import { useRef } from 'react';
import { getUser } from '../../../../service/User';

function Form() {
  const solicitanteRef = useRef('');
  const dateRef = useRef('');
  const amountPersonRef = useRef(0);
  const amountTablesRef = useRef(0);
  const userName = getUser().name;
  const id= getUser().user_id;

  const handerReservar = (e) => {
    const token = localStorage.getItem('token');
    e.preventDefault();
    const solicitante = solicitanteRef.current.value;
    const amountTables = Number.parseInt(amountTablesRef.current.value);
    const amountPerson = Number.parseInt(amountPersonRef.current.value); 
    const date = dateRef.current.value;
    
    if (isNaN(amountTables) || isNaN(amountPerson) || amountTables <= 0 || amountPerson <= 0) {
      toast.error('Por favor, complete todos los campos correctamente.');
      return;
    }

    console.log(amountPerson, amountTables,date);
    console.log(userName)

    fetch(`${import.meta.env.VITE_URL}/reservations`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({
        description: "Reservacion",
        amount_persons: amountPerson,
        amount_tables: amountTables,
        reservationsDate: date,
        status: "Pendiente",
        created_by: userName,
        updated_by: userName,
        user_id_fk: id
      })
    })
    .then(response => {
      if (response.ok) {
        toast.success('Mesa agregada correctamente');
        return response.json();
      } else {
        console.log(response.json())
        throw new Error('Error al realizar la solicitud');
        
      }
    })
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.log(error);
      toast.error('Algo malo ocurrió')
    });
  };

  return (
    <form className="space-y-4" onSubmit={handerReservar}>
      <FormField
        id="noPeople"
        name="noPeople"
        type="number"
        placeholder="ej. 6"
        autoComplete="current-text"
        required={true}
        label="Número de personas"
        innerRef={amountPersonRef}
      />
      <FormField
        id="amount"
        name="amount"
        type="number"
        placeholder="ej. 6"
        autoComplete="number-current"
        required={true}
        label="Cantidad de mesas"
        innerRef={amountTablesRef}
      />
            <FormField
        id="date"
        name="date"
        type="datetime-local"
        placeholder=""
        autoComplete="time"
        required={true}
        label="Fecha"
        innerRef={dateRef}
      />
      <div>
        <Button children={"Reservar mesa"} />
        <Toaster
  position="top-center"
  reverseOrder={false}
/>

      </div>
    </form>
  );
}

export default Form;
