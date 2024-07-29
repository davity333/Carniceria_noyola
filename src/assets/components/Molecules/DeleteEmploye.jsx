import { useEffect, useState } from 'react';
import Button from '../Atoms/Register/Button';
import toast, { Toaster } from 'react-hot-toast';
import { getUser } from '../../../service/User';
import style from './../../../../fonts.module.css';
import Loading from './Loading';

function DeleteEmployee() {
  const [employees, setEmployees] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchEmployees() {
      setIsLoading(true);
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          toast.error('No se encontró el token de autenticación.');
          setIsLoading(false);
          return;
        }

        const response = await fetch(`${import.meta.env.VITE_URL}/users/userRole/2`, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });

        if (response.status === 401) {
          toast.error('No autorizado. Por favor, inicia sesión de nuevo.');
          setIsLoading(false);
          return;
        }

        const data = await response.json();
        setEmployees(data);
      } catch (error) {
        toast.error('Ocurrió un error en el servidor.');
      }
      setIsLoading(false);
    }
    fetchEmployees();
  }, []);

  const deleteEmployee = async (id) => {
    setIsLoading(true);
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        toast.error('No se encontró el token de autenticación.');
        setIsLoading(false);
        return;
      }

      const response = await fetch(`${import.meta.env.VITE_URL}/users/delete/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({ deleted: 1, updated_by: getUser().name })
      });

      if (response.ok) {
        setEmployees(employees.filter(employee => employee.user_id !== id));
        toast.success('Empleado eliminado exitosamente.');
      } else if (response.status === 401) {
        toast.error('No autorizado. Por favor, inicia sesión de nuevo.');
      } else {
        console.error('Error deleting employee:', response.statusText);
        toast.error('Ocurrió un error al eliminar un empleado.');
      }
    } catch (error) {
      console.error('Error eliminando empleados:', error);
      toast.error('Error al eliminar el empleado.');
    }
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <Loading />}
      <div className="min-h-screen bg-[#a84747] text-white flex flex-col items-center py-10">
        <h1 id={style.textDecoration} className="text-5xl font-bold mb-6 [text-shadow:_0px_3px_4px_rgba(0,0,0,0.68)]">Bienvenido</h1>
        <div className="w-full max-w-4xl bg-[#d6ad94] p-8 shadow-[-17px_-6px_24px_-9px_rgba(0,0,0,0.49)]">
          <h2 id={style.carnesdecerdo} className="text-3xl font-semibold mb-4 [text-shadow:_0px_1px_4px_rgba(0,0,0,0.68)]">Registros de personal</h2>
          <table className="min-w-full bg-[#dabebe] text-black rounded-lg overflow-hidden">
            <thead className="bg-[#ffffff]">
              <tr>
                <th className="py-3 px-4">Nombre</th>
                <th className="py-3 px-4">Email</th>
                <th className="py-3 px-4">Teléfono</th>
                <th className="py-3 px-4">Eliminar</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr key={employee.user_id} className="hover:bg-gray-100">
                  <td className="py-3 px-4">{employee.name} {employee.lastname}</td>
                  <td className="py-3 px-4">{employee.email}</td>
                  <td className="py-3 px-4">{employee.number_phone}</td>
                  <td className="py-3 px-4">
                    <Button onClick={() => deleteEmployee(employee.user_id)}>Delete</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Toaster position="top-center" />
        </div>
      </div>
    </>
  );
}

export default DeleteEmployee;
