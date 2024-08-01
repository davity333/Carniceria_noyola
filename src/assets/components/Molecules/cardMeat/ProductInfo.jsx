function ProductInfo({ productName, price, amount }) {
    return (
      <div className="mt-4">
        <p className="text-[13px] sm:text-2xl md:text-3xl font-bold">{productName}</p>
        <p className="text-[16px] sm:text-3xl md:text-2xl text-gray-700">{"$" + price}</p>
        <p className="text-[14px] sm:text-xl md:text-2xl text-gray-700">{'En stock: ' + amount + ' (kg)'}</p>
      </div>
    );
  }
  
  export default ProductInfo;
  