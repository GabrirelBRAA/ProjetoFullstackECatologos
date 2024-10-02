import { Sku } from "./sku"
import { Image } from "./image"

export type Product = {
  id: number,
  name: string,
  price: number,
  category: string,
  reference: string,
  images?: Image[],
  skus?: Sku[],
  amountSelected: number
}