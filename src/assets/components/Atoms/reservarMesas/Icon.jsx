import { BoxIconElement } from "boxicons";
const Icon = ({ type }) => {
  const icons = {
    menu: (
        <box-icon name='menu' ></box-icon>
    ),
    close: (
        <box-icon name='minus'></box-icon>
    ),
    search: (
     <box-icon name='search-alt-2' ></box-icon>
    ),
  };

  return icons[type] || null;
};

export default Icon;
