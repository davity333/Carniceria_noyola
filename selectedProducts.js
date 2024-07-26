let selectedProducts = [];

export const getSelectedProducts = () => {
  return selectedProducts;
};

export const addProduct = (product) => {
  const existProduct = selectedProducts.find(p => p.product_id === product.product_id);
  if (existProduct) {
    existProduct.quantity += 1;
  } else {
    selectedProducts.push({ ...product, quantity: 1 });
  }
};

export const updateProductQuantity = (product, quantity) => {
  selectedProducts = selectedProducts.map(p =>
    p.product_id === product.product_id ? { ...p, quantity } : p
  ).filter(p => p.quantity > 0);
};

export const getProductsToPost = () => {
  return selectedProducts.map(p => ({
    product_id_fk: p.product_id,
    amount: p.quantity,
  }));
};
