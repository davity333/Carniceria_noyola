import Logo from '../Atoms/reservarMesas/Logo';
import NavItem from '../Molecules/reservarMesas/NavItem';
import Icon from '../Atoms/reservarMesas/Icon';

const Header = () => {
  return (
    <header className="flex flex-col md:flex-row items-center justify-between bg-customColor-came p-4 w-full">
      <Logo />
      <nav className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 mt-4 md:mt-0">
        <NavItem text="Comprar" />
        <NavItem text="Reservar producto" />
        <NavItem text="Salir →" />
      </nav>
      <div className="flex items-center space-x-2 mt-4 md:mt-0 bg-gray-300 rounded ">
        <input
          type="text"
          placeholder="Buscar..."
          className="px-4 py-2 focus:outline-none focus:ring-2 focus:ring-inset rounded bg-gray-300 border-gray-300"
        />
        <button className="p-2">
          <Icon type={'search-alt-2'}/>
        </button>
      </div>
    </header>
  );
};

export default Header;
