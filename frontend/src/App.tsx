import { createContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const indexContext = createContext(null)

type Sku = {
  size: string,
  open_grid: number,
  stock: string,
  min_quantity: number
}

type Image = {
  path: string,
  order: number,
  company_key: string,
}

type Product = {
  id: number,
  name: string,
  price: number,
  category: string,
  images?: Image[],
  skus?: Sku[]
}

type Categories = {
  [key: string] : Product[]
}

async function getImages(product: Product) {

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

async function getSkus(product: Product) {
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

function createCategoryesArray(products: Product[]) : Categories{
  var categories: Categories = {};

  products.forEach(product => {
    if(Object.keys(categories).includes(product.category) ){
      categories[product.category].push(product)
    }
    else{
      categories[product.category] = [];
      categories[product.category].push(product);
    }})

  return categories;
}

function App() {
  const [index, setIndex] = useState<number[]>([0, 0])
  const [categories, setCategories] = useState<Categories>({})


  useEffect(() => {
    async function getData() {
      const url = "http://localhost:6969/products?ids=452&ids=7030";
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json() as Product[];
        await Promise.all(json.map(async (product: Product) => {
          await getSkus(product);
          await getImages(product);
        }));
        const product_categories = createCategoryesArray(json);
        setCategories(product_categories)
        console.log(product_categories);
      } catch (error) {
        console.error(error);
      }
    }
    getData();
  }, [])

  const current_category = Object.keys(categories)[index[0]];
  const current_products = categories[current_category];
  const current_product = current_products[index[1]]
  console.log(current_product);
  console.log(index[1])

  return (
    <>
      <h1>{current_category}</h1>
    </>
  )
}

export default App
