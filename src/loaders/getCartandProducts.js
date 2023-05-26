import { getStoredCart } from "../utilis/fakeDb"

export const productsAndCartData = async () => {
    const productsData = await fetch('http://localhost:3000/products')
    const products = await productsData.json()
  
    const savedCart = getStoredCart()
    const initialCart = []
    for (const id in savedCart) {
      const foundProduct = products.find(product => product.id === id)
      if (foundProduct) {
        const quantity = savedCart[id]
        foundProduct.quantity = quantity
        initialCart.push(foundProduct)
      }
    }
  
    return { products, initialCart }
  }