function ProductImage({ src, alt }) {
    return (
      <div className="flex items-center justify-center h-40 sm:h-48 md:h-56">
        <img className="flex items-center justify-center max-h-full max-w-full" src={src} alt={alt} />
      </div>
    );
  }
  
  export default ProductImage;
  