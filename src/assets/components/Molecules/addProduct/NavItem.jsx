const NavItem = ({ text }) => {
  return (
    <div className="flex items-center space-x-2 cursor-pointer hover:text-blue-100">
      <span className="font-medium">{text}</span>
    </div>
  );
};

export default NavItem;
