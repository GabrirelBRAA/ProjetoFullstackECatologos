import { Product } from "../../types/product"
import { getSkusAmount } from "../../utils/dataUtils.ts"
import { SelectorButton, LabelAndPriceContainer, Span, SelectorContainer } from "./style.ts"


export function Selector({ product, updateCategories, getAcumulatedPrice }: { product: Product, updateCategories: Function, getAcumulatedPrice: Function }) {

    const increment = () => {
        updateCategories(product.amountSelected + 1, product)
    }

    const decrement = () => {
        if (product.amountSelected - 1 < 0)
            return;
        updateCategories(product.amountSelected - 1, product)
    }
    let acumulatedPrice = getAcumulatedPrice()
    const skusAmount = getSkusAmount(product.skus!)
    return (<SelectorContainer>
        <LabelAndPriceContainer>
            <Span><strong>Atual:</strong></Span>
            <Span> R${(product.price || 100) * product.amountSelected * skusAmount}</Span>
        </LabelAndPriceContainer>
        <SelectorButton size="40px" onClick={decrement}>-</SelectorButton>
        <span>{product.amountSelected}</span>
        <SelectorButton size="40px" onClick={increment}>+</SelectorButton>
        <LabelAndPriceContainer>
            <Span><strong>Acumulado:</strong></Span>
            <Span>R$ {acumulatedPrice}</Span>
        </LabelAndPriceContainer>
    </SelectorContainer>)
}