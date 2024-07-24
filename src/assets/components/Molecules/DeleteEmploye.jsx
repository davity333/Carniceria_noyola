import { useEffect, useState } from 'react';
import Button from '../Atoms/Register/Button';
import toast, { Toaster } from 'react-hot-toast';

function DeleteEmployee() {
  const [employees, setEmployees] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchEmployees() {
      setIsLoading(true);
      try {
        const response = await fetch(`${import.meta.env.VITE_URL}/users`);
        const data = await response.json();
        setEmployees(data);
      } catch (error) {
        console.error('Error fetching employees:', error);
        toast.error('Error fetching employees');
      }
      setIsLoading(false);
    }
    fetchEmployees();
  }, []);

  const deleteEmployee = async (id) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${import.meta.env.VITE_URL}/users/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        setEmployees(employees.filter(employee => employee.id !== id));
        toast.success('Employee deleted successfully');
      } else {
        console.error('Error deleting employee:', response.statusText);
        toast.error('Error deleting employee');
      }
    } catch (error) {
      console.error('Error deleting employee:', error);
      toast.error('Error deleting employee');
    }
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <div className="flex items-center">
              <svg className="animate-spin h-5 w-5 mr-3 text-blue-500" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25" fill="none"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
              </svg>
              <span className="text-lg font-medium">Cargando...</span>
            </div>
            <div className="mt-4 h-1 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-blue-500 animate-pulse"></div>
            </div>
          </div>
        </div>
      )}
      <div className="min-h-screen bg-[#a84747]
       text-white flex flex-col items-center py-10">
        <h1 className="text-4xl font-bold mb-6
        [text-shadow:_0px_3px_4px_rgba(0,0,0,0.68)]">Bienvenido</h1>
        <div className="w-full max-w-4xl bg-[#d6ad94] p-8
        shadow-[-17px_-6px_24px_-9px_rgba(0,0,0,0.49)]">
          <h2 className="text-3xl font-semibold mb-4
          [text-shadow:_0px_1px_4px_rgba(0,0,0,0.68)]">Registros de personal</h2>
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
                <tr key={employee.id} className="hover:bg-gray-100">
                  <td className="py-3 px-4">{employee.name} {employee.lastname}</td>
                  <td className="py-3 px-4">{employee.email}</td>
                  <td className="py-3 px-4">{employee.number_phone}</td>
                  <td className="py-3 px-4">
                    <Button onClick={() => deleteEmployee(employee.id)}>Delete</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Toaster position="top-center" reverseOrder={false} />
        </div>
      </div>
    </>
  );
}

export default DeleteEmployee;
