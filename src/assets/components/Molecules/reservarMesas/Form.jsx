import FormField from './FormField';
import Button from '../../Atoms/reservarMesas/Button';
import toast, { Toaster } from 'react-hot-toast';
import { useRef } from 'react';

function Form() {
  const solicitanteRef = useRef('');
  const dateRef = useRef('');
  const amountPersonRef = useRef(0);
  const amountTablesRef = useRef(0);

  const handerReservar = (e) => {
    e.preventDefault();
    const solicitante = solicitanteRef.current.value;
    const amountTables = Number.parseInt(amountTablesRef.current.value);
    const amountPerson = Number.parseInt(amountPersonRef.current.value);
    const date = dateRef.current.value;

    // Validar que todos los campos estén llenos y tengan valores válidos
    if (!solicitante || !date || isNaN(amountTables) || isNaN(amountPerson) || amountTables <= 0 || amountPerson <= 0) {
      toast.error('Por favor, complete todos los campos correctamente.');
      return;
    }

    console.log(solicitante, amountPerson, amountTables, date);

    fetch(`${import.meta.env.VITE_URL}/reservation`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        'name': solicitante,
        'amount_tables': amountTables,
        'description': 'Reservacion',
        'amount_persons': amountPerson,
        'reservationDate': date,
        'status': 'Pendiente',
        'created_by': solicitante,
        'updated_by': solicitante,
      })
    })
    .then(response => {
      if (response.ok) {
        toast.success('Mesa agregada correctamente');
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
      toast.error('Algo malo ocurrió')
    });
  };

  return (
    <form className="space-y-4" onSubmit={handerReservar}>
      <FormField
        id="name"
        name="name"
        type="text"
        placeholder="ej. Jesús"
        autoComplete="text"
        required={true}
        label="Nombre del solicitante"
        innerRef={solicitanteRef}
      />
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
        id="date"
        name="date"
        type="datetime-local"
        placeholder=""
        autoComplete="s"
        required={true}
        label="Hora"
        innerRef={dateRef}
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
