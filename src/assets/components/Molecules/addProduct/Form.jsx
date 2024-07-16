import FormField from './FormField';
import Button from '../../Atoms/reservarMesas/Button';
import toast, { Toaster } from 'react-hot-toast';
import { useState } from 'react';
import { TodasCarnes } from '../../../../data/CardsCarnes';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
function Form() {
  const navigate = useNavigate();

  const handleClick = () => {
      navigate('/allMeats');
      }

      const [nameProduct, setNameProducto] = useState('');
      const [price, setPrecio] = useState('');
      const [stock, setStock] = useState('');

   
      const selectImage = (e) => {
        const selectedFile = e.target.files[0];
        const fileName = selectedFile.name;
    
        const newFileText = `Archivo seleccionado: ${fileName}`;
        setFileText(newFileText); // Actualizar el estado fileText con el nombre del archivo
        console.log(newFileText);
    }

      const click = (e) => {
        

        const newProduct = {
          producto: nameProduct,
          precio: "$"+price,
          cantidad: stock + " kg",
        }   

        //----------------------------------------------//

        e.preventDefault(); // preventDefault es para que no se actualice cuando se hace clic en el botón

    fetch(`${import.meta.env.VITE_URL}/products`, { // METODO, CABEZARA Y BODY
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*' // ES PARA PERMITIR Y RESTRINGIR QUE DOMINIOS Y SITIOS WEB SON ACCESIBLES
        },
        body: JSON.stringify({
            'description': nameProduct,
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


        /*----------------------------------------------*/

        if(nameProduct === ''|| price === '' || stock === ''){
          toast.error("no puedes dejar campos vacios")
        }else if(price <= 0){
          toast.error('Ingresa un precio valido')
        }else if(stock <= 0){
          toast.error('Ingresa un stock valido')
        }else{
          toast.success('Producto agregado correctamente')
          TodasCarnes.AllMeats.push(newProduct);
        }

      }
      

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
        value={nameProduct}
        onChange={(e) => setNameProducto(e.target.value)}
        
      />
      <FormField
        id="price"
        name="price"
        type="number"
        placeholder="ej. 6"
        autoComplete="current-text"
        required={true}
        label="Precio"
        value={price}
        onChange={(e) => setPrecio(e.target.value)}
      />
      <FormField
        id="stock"
        name="stock"
        type="number"
        placeholder="ej. 7 (kg)"
        autoComplete="current-text"
        required={true}
        label="Stock del producto"
        value={stock}
        onChange={(e) => setStock(e.target.value)}
      />
         <FormField
        id="picture"
        name="picture"
        type="file"
        placeholder=""
        autoComplete=""
        required={true}
        label="Subir foto"
        onChange={selectImage}
      />
      
      <div>
        <Button type="submit" onClick={click} children={"Agregar producto"}></Button>
        <Toaster></Toaster>
      </div>
      <button onClick={handleClick} className="flex justify-center items-end m-4 text-yellow-100">VER PRODUCTOS</button>
    </form>
    
  );
}

export default Form;
