import SiluetaSupermercado from '../../Atoms/AtomsPaginaPrincipal/SiluetaSupermercado'
import ButtonMeat from '../../Atoms/cardMeat/ButtonMeat'
import ProductInfo from "../cardMeat/ProductInfo";
import ProductImage from "../cardMeat/ProductImage";

function CardsMeats({ src, productName, price, children, amount, onClick }) {
  const isOutOfStock = amount <= 0;

  return (
    <div
      className="product-card bg-[#c5c06324] p-6 m-2 rounded-2xl text-center w-36 h-[70%] flex flex-col col-2
       sm:flex-col col-auto sm:w-80 sm:h-[97%] sm:col-span-1
       shadow-[0px_18px_27px_-7px_rgba(0,0,0,0.25)]"
    >
      {children}
      <ProductImage src={src} alt={productName} />
      <ProductInfo productName={productName} price={price} amount={amount} />
      <ButtonMeat text="Agregar al carrito" onClick={onClick} disabled={isOutOfStock} />
    </div>
  );
}

export default CardsMeats;
