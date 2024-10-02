import { Product} from "../types/product";
import { Categories } from "../types/categories"
import { Sku } from "../types/sku";

export function createCategoriesArray(products: Product[]): Categories {
  var categories: Categories = {};

  products.forEach(product => {
    product.amountSelected = 0;
    if (Object.keys(categories).includes(product.category)) {
      categories[product.category].push(product)
    }
    else {
      categories[product.category] = [];
      categories[product.category].push(product);
    }
  })
  return categories;
}

export function getSkusAmount(skus: Sku[]) {
  let total_amount = 0;
  skus.forEach((sku) => {
    total_amount += sku.min_quantity
  })
  return total_amount;
}