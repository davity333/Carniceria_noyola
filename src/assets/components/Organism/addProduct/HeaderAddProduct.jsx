import Logo from '../../Atoms/reservarMesas/Logo';
import NavItem from '../../Molecules/addProduct/NavItem';
import Icon from '../../Atoms/reservarMesas/Icon';
import Input from '../../Atoms/reservarMesas/Input';
import { useState } from 'react';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex flex-col md:flex-row items-center justify-between bg-customColor-came p-4 w-full">
      <div className="flex justify-between w-full md:w-auto">
        <Logo />
        <button className="md:hidden" onClick={toggleMenu}>
          <Icon type={isMenuOpen ? 'close' : 'menu'} />
        </button>
      </div>
      <nav className={`flex flex-col p-2 md:flex-row items-center md:space-x-6 mt-4 md:mt-0 ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
        <NavItem text="Actulizar producto" />
        <NavItem text="Eliminar producto" />
        <NavItem text="Salir →" />
      </nav>
      <div className="flex items-center space-x-2 mt-4 md:mt-0 w-full md:w-auto">
        <Input
          id="search"
          name="search"
          type="text"
          placeholder="Buscar..."
          autoComplete="off"
          required={false}
        />
        <button className="p-2">
          <Icon type="search" />
        </button>
      </div>
    </header>
  );
};

export default Header;