import Icon from "../../Atoms/reservarMesas/Icon";

const NavItem = ({ icon, text, onClick }) => {
  return (
    <div className="flex items-center space-x-2 cursor-pointer" onClick={onClick}>
      <Icon type={icon} />
      <span className="font-medium">{text}</span>
    </div>
  );
};

export default NavItem;
