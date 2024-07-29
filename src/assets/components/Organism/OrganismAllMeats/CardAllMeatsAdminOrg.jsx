import { useEffect, useState } from 'react';
import Button from '../../Atoms/Register/Button';
import toast, { Toaster } from 'react-hot-toast';
import { getUser } from '../../../../service/User';
import Loading from '../../Molecules/Loading';
import { data } from 'autoprefixer';

function DeleteProduct() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchProducts() {
      setIsLoading(true);
      try {
        const response = await fetch(`${import.meta.env.VITE_URL}/products/product`);
        const data = await response.json();
        console.log(data);
        setProducts(data);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
        console.log(data)
        console.log(products);
        toast.error('Error al obtener los datos');
      }
      setIsLoading(false);
    }
    fetchProducts();
  }, []);

  const deleteProduct = async (id) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${import.meta.env.VITE_URL}/products/delete/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ deleted: 1, updated_by: getUser().name })
      });

      if (response.ok) {
        console.log('Response OK:', await response.json());
        setProducts(products.filter(product => product.product_id !== id));
        toast.success('Producto eliminado exitosamente');
      } else {
        console.error('Error eliminando el producto:', response.statusText);
        toast.error('Ocurrió un error al eliminar los productos');
      }
    } catch (error) {
      console.error('Error al eliminar el producto:', error);
      toast.error('Error al eliminar el producto');
    }
    setIsLoading(false);
  };

  const updateProductAmount = async (id, newAmount) => {
    console.log('actualizar stock:', id, newAmount);
    setIsLoading(true);
    try {
      const response = await fetch(`${import.meta.env.VITE_URL}/products/addAmount/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ amount: newAmount, updated_by: getUser().name })
      });

      if (response.ok) {
        console.log('Response OK:', await response.json());
        setProducts(products.map(product => 
          product.product_id === id ? { ...product, amount: newAmount } : product
        ));
      } else {
        console.error('Error updating stock:', response.statusText);
        toast.error('Ocurrió un error al actualizar el stock');
      }
    } catch (error) {
      console.error('Error al actualizar el stock:', error);
      toast.error('Error al actualizar el stock');
    }
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <Loading />}
      <div className="min-h-screen bg-[#a84747] text-white flex flex-col items-center py-10">
        <h1 className="text-4xl font-bold mb-6 [text-shadow:_0px_3px_4px_rgba(0,0,0,0.68)]">Bienvenido</h1>
        <div className="w-full max-w-4xl bg-[#d6ad94] p-8 shadow-[-17px_-6px_24px_-9px_rgba(0,0,0,0.49)]">
          <h2 className="text-3xl font-semibold mb-4 [text-shadow:_0px_1px_4px_rgba(0,0,0,0.68)]">Productos</h2>
          <table className="min-w-full bg-[#dabebe] text-black rounded-lg overflow-hidden">
            <thead className="bg-[#ffffff]">
              <tr>
                <th className="py-3 px-4">Imagen</th>
                <th className="py-3 px-4">Nombre</th>
                <th className="py-3 px-4">En stock</th>
                <th className="py-3 px-4">Precio</th>
                <th className="py-3 px-4">Eliminar</th>
              </tr>
            </thead>
            <tbody>
              
              {products.map((product) => (
                <tr key={product.product_id} className="hover:bg-gray-100">
                  <td className="py-3 px-4"><img className="w-7 h-7" src={product.image} alt={product.description} /></td>
                  <td className="py-3 px-4">{product.description}</td>
                  <td className="py-3 px-4">
                    <input
                      type="number"
                      value={product.amount}
                      onChange={(e) => updateProductAmount(product.product_id, e.target.value)}
                      className="w-16 p-1 text-center border rounded"
                    />
                  </td>
                  <td className="py-3 px-4">{product.price}</td>
                  <td className="py-3 px-4">
                    <Button onClick={() => deleteProduct(product.product_id)}>Eliminar</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Toaster position="top-center"/>
        </div>
      </div>
    </>
  );
}

export default DeleteProduct;
