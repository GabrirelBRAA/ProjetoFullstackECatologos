import { createContext, useEffect, useState } from 'react'
import './App.css'
import { Product } from './types/product'
import { productService } from './services/productService'
import Nav from './components/Nav'
import ImageDisplay from './components/ImageDisplay'

type Categories = {
  [key: string]: Product[]
}

function createCategoriesArray(products: Product[]): Categories {
  var categories: Categories = {};

  products.forEach(product => {
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

function App() {

  const [index, setIndex] = useState<number[]>([0, 0])
  const [categories, setCategories] = useState<Categories>({})

  function advanceIndexByProduct() {
    const categoriesKeys = Object.keys(categories);
    const categoriesKey = Object.keys(categories)[index[0]];
    const arrayLength = categories[categoriesKey].length;
    var newIndex = [0, 0];
    if (index[1] == arrayLength - 1) {
      newIndex[1] = 0
      if (index[0] == (categoriesKeys.length - 1)) {
        newIndex[0] = index[0] + 1
      } else {
        newIndex[0] = 0
      }
    } else {
      index[1] += 1;
    }
    setIndex(newIndex)
  }

  function advanceIndexByCategory() {
    const categoriesKeys = Object.keys(categories);
    const categoriesKey = Object.keys(categories)[index[0]];
    const arrayLength = categories[categoriesKey].length;
    var newIndex = [0, 0];
    if (index[0] == categoriesKey.length - 1) {
      newIndex[1] = 0
      newIndex[0] = 0
    } else {
      newIndex[1] = 0
      newIndex[0] = index[0] + 1
    }
    setIndex(newIndex)
   }

  function recedeIndexByProduct() {

    const categoriesKeys = Object.keys(categories);
    const categoriesKey = Object.keys(categories)[index[0]];
    const arrayLength = categories[categoriesKey].length;
    var newIndex = [0, 0];
    if (index[1] == 0) {
      if (index[0] == 0 ){
        newIndex[0] = categoriesKey.length - 1
      } else {
        newIndex[0] = index[0] - 1
      }
      newIndex[1] = categoriesKeys[index[0]].length - 1
    } else {
      index[1] -= 1;
    }
    setIndex(newIndex)
  }

  function recedeIndexByCategory() { 
    const categoriesKeys = Object.keys(categories);
    const categoriesKey = Object.keys(categories)[index[0]];
    const arrayLength = categories[categoriesKey].length;
    var newIndex = [0, 0];
    if (index[0] == 0) {
      newIndex[1] = 0
      newIndex[0] = categoriesKeys.length - 1
    } else {
      newIndex[1] = 0
      newIndex[0] = index[0] - 1
    }
    setIndex(newIndex)
  }


  useEffect(() => {
    async function getData() {
      const products = await productService();
      const product_categories = createCategoriesArray(products!);
      setCategories(product_categories)
      console.log(product_categories);
    }
    getData();
  }, [])

  /*
  const current_category = Object.keys(categories)[index[0]];
  const current_products = categories[current_category];
  const current_product = current_products[index[1]]
  console.log(current_product);
  console.log(index[1])
  */

  return (
    <>
      <Nav/>
      <ImageDisplay/>
    </>
  )
}

export default App
