import { Sku } from "../../types/sku"
import styled from 'styled-components'
import { Round } from "../../styles/styles"

const FlexDiv = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    margin: 0px 5px;
    text-align: center;
`

export const SkuContainer = styled.div`
    flex: 1;
    display: flex;
    background-color: white;
    justify-content: center;
    align-items: center;
    width: 400px;
    margin: auto;
    background-color: rgb(128, 156, 170);
`

export const RoundDiv = styled.div<{ size: string }>`
    ${Round};
    border: solid 1px white;
    background-color: rgb(128, 156, 170);
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    left: -5px;
    top: -14px;
    font-size: 0.7rem;
    text-align: center;
    color: white
`

export const BoxySpan = styled.span`
    position: relative;
    width: 35px;
    padding: 2px 0px;
    border-radius: 10%;
    background-color: white;
    text-align: center;
`

export const WhiteColoredSpan = styled.span`
    color: white;
    font-size: 2rem;
`

export const WhiteLabel = styled.div`
    color: white;
    position: absolute;
    top: -15px;
    left: 3px;
    font-size: 0.8rem;
`

function getTotalAmountSkus(skus: Sku[]) {
    let sum = 0;
    skus.forEach((sku) => {
        sum += sku.min_quantity;
    })
    return sum;
}

export function SkusDisplay({ skus }: { skus: Sku[] }) {
    const skuElements = skus.map((sku) => {
        return <FlexDiv key={sku.size}>
            <BoxySpan>{sku.min_quantity}</BoxySpan>
            <RoundDiv size="25px"><span>{sku.size}</span></RoundDiv>
        </FlexDiv>
    })

    let skuTotalAmount = getTotalAmountSkus(skus)

    return (
        <SkuContainer>
            {skuElements}
            <WhiteColoredSpan>=</WhiteColoredSpan>
            <BoxySpan>{skuTotalAmount}<WhiteLabel>Pack</WhiteLabel></BoxySpan>
        </SkuContainer>
    )
}
/*
            <span>G</span>
            <span>GG</span>
            <span>M</span>
            <span>P</span>
            */