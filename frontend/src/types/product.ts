import { Sku } from "./sku"
import { Image } from "./image"

export type Product = {
  id: number,
  name: string,
  price: number,
  category: string,
  images?: Image[],
  skus?: Sku[]
}