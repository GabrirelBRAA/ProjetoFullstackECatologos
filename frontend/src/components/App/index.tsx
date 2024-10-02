import { useEffect, useState, createContext, useContext } from 'react'
import { Product } from '../../types/product'
import { productService } from '../../services/productService'
import Nav from '../Nav'
import ImageDisplay from '../ImageDisplay'
import BuyOptions from '../BuyOptions'
import {Categories} from '../../types/categories'
import { createCategoriesArray, getSkusAmount } from '../../utils/dataUtils'
import { Body, AppBody } from './style'


export type GlobalContext = {
  product?: Product;
  findAndChangeProductByRef: Function
}

const globalContext = createContext<GlobalContext>({
  product: undefined,
  findAndChangeProductByRef: () => false,
})

export const useGlobalContext = () => useContext(globalContext);

function App() {

  const [index, setIndex] = useState<number[]>([0, 0])
  const [categories, setCategories] = useState<Categories>({})

  const getCurrentProduct = (): Product | undefined => {
    if (Object.keys(categories).length > 0) {
      const current_category = Object.keys(categories)[index[0]];
      const current_products = categories[current_category];
      const current_product = current_products[index[1]];
      return current_product;
    } else {
      return undefined;
    }
  }

  function findAndChangeProductByRef(reference: string) {
    for (const [categoryKey, products] of Object.entries(categories)) {
      for (let product of products) {
        if (product.reference === reference) {
          const categoriesKeys = Object.getOwnPropertyNames(categories);
          const index0 = categoriesKeys.indexOf(categoryKey)
          const index1 = categories[categoryKey].indexOf(product)
          setIndex([index0, index1])
          return true;
        }
      }
    }
    return false;
  }

  function advanceIndexByProduct() {
    const categoriesKeys = Object.keys(categories);
    const categoriesKey = Object.keys(categories)[index[0]];
    const arrayLength = categories[categoriesKey].length;
    var newIndex = [0, 0];
    if (index[1] == arrayLength - 1) {
      newIndex[1] = 0
      if (index[0] == (categoriesKeys.length - 1)) {
        newIndex[0] = 0
      } else {
        newIndex[0] = index[0] + 1
      }
    } else {
      newIndex[0] = index[0];
      newIndex[1] += index[1] + 1;
    }
    setIndex(newIndex)
  }

  function advanceIndexByCategory() {
    const categoriesKeys = Object.getOwnPropertyNames(categories);
    var newIndex = [0, 0];
    if (index[0] == categoriesKeys.length - 1) {
      newIndex[1] = 0
      newIndex[0] = 0
    } else {
      newIndex[1] = 0
      newIndex[0] = index[0] + 1
    }
    setIndex(newIndex)
  }

  function recedeIndexByProduct() {

    const categoriesKeys = Object.getOwnPropertyNames(categories);
    var newIndex = [0, 0];
    if (index[1] == 0) {
      if (index[0] == 0) {
        newIndex[0] = categoriesKeys.length - 1
      } else {
        newIndex[0] = index[0] - 1
      }
      console.log(newIndex[0]);
      console.log(categoriesKeys[newIndex[0]])
      const current_category = categoriesKeys[newIndex[0]];
      newIndex[1] = categories[current_category].length - 1
      console.log(newIndex)
    } else {
      newIndex[1] = index[1] - 1;
      newIndex[0] = index[0];
    }
    setIndex(newIndex)
  }

  function recedeIndexByCategory() {
    const categoriesKeys = Object.getOwnPropertyNames(categories);
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
    }
    getData();
  }, [])

  function updateCategories(amount: number, product: Product) {
    let new_categories: Categories = { ...categories };
    let current_product_array = new_categories[product.category]
    const index = current_product_array.findIndex((productFiltered) => productFiltered.id == product.id)
    current_product_array[index].amountSelected = amount;
    setCategories(new_categories)
  }

  function getAcumulatedPrice() {
    let sum = 0;
    for (const [key, value] of Object.entries(categories)) {
      value.forEach((product) => {
        let skusAmount = getSkusAmount(product.skus!)
        sum += (product.price || 100) * product.amountSelected * skusAmount
      })
    }
    return sum;
  }

  function getCurrentCategoryWithNumber(categories: Categories, index: number[]) {
    let key = Object.keys(categories)[index[0]]
    let length = categories[key].length
    return key + '(' + length + ')'
  }

  const calcImageDisplay = () => {
    if (Object.keys(categories).length > 0) {
      let product = getCurrentProduct()
      let categoryNameWithAmount = getCurrentCategoryWithNumber(categories, index)
      return (<Body>
        <Nav categoryNameWithAmount={categoryNameWithAmount} advanceIndexByCategory={advanceIndexByCategory} recedeIndexByCategory={recedeIndexByCategory} />
        <ImageDisplay images={product!.images!} indexLeft={recedeIndexByProduct} indexRight={advanceIndexByProduct} />
        <BuyOptions product={product!} updateCategories={updateCategories} getAcumulatedPrice={getAcumulatedPrice} />
      </Body>);
    } else {
      return <h1>Loading</h1>;
    }
  }

  return (
    <globalContext.Provider value={{ product: getCurrentProduct(), findAndChangeProductByRef: findAndChangeProductByRef }}>
      <AppBody>
        {calcImageDisplay()}
      </AppBody>
    </globalContext.Provider>
  )
}

export default App
