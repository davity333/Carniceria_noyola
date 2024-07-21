import React, { useRef, useState } from 'react';
import FormField from './../Register/FormField';
import Button from '../../Atoms/reservarMesas/Button';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function Form() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/allMeats');
  };

  const nameProduct = useRef('');
  const price = useRef('');
  const stock = useRef('');
  const file = useRef(null);

  const [errors, setErrors] = useState({
    nameProduct: '',
    price: '',
    stock: '',
    file: ''
  });

  const selectImage = (e) => {
    const selectedFile = e.target.files[0];
    file.current = selectedFile;
    const fileName = selectedFile.name;
    const newFileText = `Archivo seleccionado: ${fileName}`;
    console.log(newFileText);
    setErrors((prevErrors) => ({
      ...prevErrors,
      file: ''
    }));
  };

  const validateNameProduct = () => {
    if (!nameProduct.current.value.match(/^[a-zA-Z\s]+$/)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        nameProduct: 'El nombre del producto debe contener solo letras y espacios'
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        nameProduct: ''
      }));
    }
  };

  const validatePrice = () => {
    if (!price.current.value.match(/^[0-9]+(\.[0-9]{1,2})?$/)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        price: 'El precio debe ser un número válido'
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        price: ''
      }));
    }
  };

  const validateStock = () => {
    if (!stock.current.value.match(/^[0-9]+$/)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        stock: 'El stock debe ser un número entero válido'
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        stock: ''
      }));
    }
  };

  const validateFile = () => {
    if (!file.current) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        file: 'Debes subir una imagen del producto'
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        file: ''
      }));
    }
  };

  const addProducts = async (e) => {
    e.preventDefault();

    if (!nameProduct.current.value || !price.current.value || !stock.current.value || !file.current) {
      toast.error("No puedes dejar campos vacíos");
      validateNameProduct();
      validatePrice();
      validateStock();
      validateFile();
      return;
    }

    if (errors.nameProduct || errors.price || errors.stock || errors.file) {
      toast.error('Por favor corrige los errores antes de enviar');
      return;
    }

    const formData = new FormData();
    formData.append('description', nameProduct.current.value);
    formData.append('amount', stock.current.value);
    formData.append('price', price.current.value);
    if (file.current) {
      formData.append('productImage', file.current);
    }

    try {
      const response = await fetch(`${import.meta.env.VITE_URL}/products`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Error al realizar la solicitud');
      }

      const data = await response.json();
      console.log(data);

      toast.success('Producto agregado correctamente');
    } catch (error) {
      console.error(error);
      toast.error('Error al agregar el producto');
    }
  };

  return (
    <form className="space-y-4" onSubmit={addProducts}>
      <FormField
        id="type"
        name="type"
        type="text"
        placeholder="ej. Carne de lomo"
        autoComplete="text"
        required={true}
        label="Tipo de carne"
        innerRef={nameProduct}
        onBlur={validateNameProduct}
      />
      {errors.nameProduct && <p className="text-[#5b1313]">{errors.nameProduct}</p>}
      <FormField
        id="price"
        name="price"
        type="number"
        placeholder="ej. 6"
        autoComplete="current-text"
        required={true}
        label="Precio"
        innerRef={price}
        onBlur={validatePrice}
      />
      {errors.price && <p className="text-white">{errors.price}</p>}
      <FormField
        id="stock"
        name="stock"
        type="number"
        placeholder="ej. 7"
        autoComplete="current-text"
        required={true}
        label="Stock del producto"
        innerRef={stock}
        onBlur={validateStock}
      />
      {errors.stock && <p className="text-white">{errors.stock}</p>}
      <FormField
        id="picture"
        name="picture"
        type="file"
        autoComplete=""
        required={true}
        label="Subir foto"
        onChange={selectImage}
        onBlur={validateFile}
      />
      {errors.file && <p className="text-white">{errors.file}</p>}
      <div>
        <Button type="submit" children={"Agregar producto"}></Button>
        <Toaster />
      </div>
      <button onClick={handleClick} className="flex justify-center items-end m-4 text-yellow-100">
        VER PRODUCTOS
      </button>
    </form>
  );
}

export default Form;
