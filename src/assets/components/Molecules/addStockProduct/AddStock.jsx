import React, { useState, useEffect } from 'react';
import Modal from '../../Organism/addStockProduct/ModalStock';
import Button from '../../Atoms/addStockProduct/Button';
import toast,{Toaster} from 'react-hot-toast';
import Formulario from './Form';
function AddStock() {
  const [productos, setProductos] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_URL}/products`)
      .then(response => response.json())
      .then(data => setProductos(data))
      .catch(error => console.error('Error al obtener productos:', error));
      toast.error('Algo malo ocurrio al obtener los datos')
  }, []);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleSubmit = (productId, amount,e) => {
    e.preventDefault();
    fetch(`${import.meta.env.VITE_URL}/addAmount/${productId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({ amount })
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok');
      })
      .then(data => {
        console.log(data);
        toast.success('Stock actualizado exitosamente');
        handleCloseModal();
      })
      .catch(error => {
        console.error(error);
        toast.error('Algo malo ocurrió, intente más tarde');
      });
  };

  return (
    <>
      <Button
        className='bg-[#e9baba] px-8 py-4 text-4xl rounded-3xl shadow-[1px_5px_6px_5px_rgba(0,0,0,0.24)] hover:bg-[#c69696]'
        onClick={handleOpenModal}
      >
        <Toaster></Toaster>
        Agregar cantidad
      </Button>
      {isOpen && (
        <Modal onClose={handleCloseModal}>
          <Formulario productos={productos} onSubmit={handleSubmit} />
        </Modal>
      )}
    </>
  );
}

export default AddStock;
