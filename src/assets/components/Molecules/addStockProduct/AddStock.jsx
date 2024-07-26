import React, { useState, useEffect } from 'react';
import Modal from '../../Organism/addStockProduct/ModalStock';
import Button from '../../Atoms/addStockProduct/Button';
import toast,{Toaster} from 'react-hot-toast';
import Formulario from './Form';
import { getUser } from '../../../../../User';
function AddStock() {
  const [productos, setProductos] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_URL}/products/product`)
      .then(response => response.json())
      .then(data => setProductos(data))
      .catch(error => console.error('Error al obtener productos:', error));
      toast.error('Algo malo ocurrio al obtener los datos')
  }, []);
return (
    <>
       
    </>
  );
}

export default AddStock;
