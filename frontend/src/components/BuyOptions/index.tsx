import { Selector } from '../Selector/index'
import { SkusDisplay } from '../SkusDisplay'
import { useState } from 'react'
import { Product } from '../../types/product'
import ArrowsSVG from '../../assets/double-arrow.svg'
import { Container, FlexItem, ChangeOrderButton, FilteredSVG } from './style'


export default function BuyOptions({product, updateCategories, getAcumulatedPrice}: {product: Product, updateCategories: Function, getAcumulatedPrice: Function}) {

    const [order, setOrder] = useState(false)

    const changeOrder = () => {
        setOrder((previous: boolean) => {
            return !previous;
        })
    }

    let orderSelectorAndSkus: JSX.Element[]
    let selector = <Selector product={product} updateCategories={updateCategories} getAcumulatedPrice={getAcumulatedPrice}/>
    let skusDisplay = product.skus!.length == 1? <></> : <SkusDisplay skus={product.skus!}/>
    let button = product.skus!.length == 1? <></> : <ChangeOrderButton size="50px" onClick={changeOrder}>
        <FilteredSVG src={ArrowsSVG} width='20px' height='20px'/>
    </ChangeOrderButton>;
    if (order) {
        orderSelectorAndSkus = [skusDisplay, selector]
    } else{
        orderSelectorAndSkus = [selector, skusDisplay]
    }

    return (<FlexItem>
        <Container>
            {button}
            <span>{product.category}</span>
            <span>REF: {product.reference}</span>
            <span>R$ {product.price || 100}</span>
        </Container>
        {orderSelectorAndSkus[0]}
        {orderSelectorAndSkus[1]}
    </FlexItem>)
}