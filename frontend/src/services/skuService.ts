import { Product } from "../types/product";
import { Sku } from "../types/sku";

export default async function skuService(product: Product) {
  const url = "http://localhost:6969/skus/" + product.id;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json() as Sku[];
    product.skus = json;
  } catch (error) {
    console.error(error);
  }
}