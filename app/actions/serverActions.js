"use server"
import {
  revalidateTag
} from 'next/cache'
export const addProductToDatabase = async (formData) => {
  const product = formData.get('product')?.toString();
  const price = formData.get('price')?.toString();
  if (!product || !price) return
  const newProduct = {
    product,
    price
  }
  await fetch("https://64f16fb30e1e60602d23c78a.mockapi.io/products", {
    method: "post",
    headers: {
      'Content-Type': 'application/json'
    },

    body: JSON.stringify(newProduct)
  });

  revalidateTag('products');

}