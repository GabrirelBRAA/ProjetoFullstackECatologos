import { Product } from "../types/product";
import imageService from "./imageService";
import skuService from "./skuService";

    export async function productService() {
      const url =  import.meta.env['VITE_BACKEND'] + "/products?ids=452&ids=7030&ids=7041&ids=7058&ids=7067&ids=7072&ids=56824";
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json() as Product[];
        /*
        await Promise.all(json.map(async (product: Product) => {
          await imageService(product);
          await skuService(product);
        }));
        */
        return json;
      } catch (error) {
        console.error(error);
      }
    }