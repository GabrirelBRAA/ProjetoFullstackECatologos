import { Product } from "../types/product";
import { Image } from "../types/image";

export default async function imageService(product: Product) {

  const url = "http://localhost:6969/images/" + product.id;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json() as Image[];
    product.images = json
  } catch (error) {
    console.error(error);
  } 
}