import styled from 'styled-components'
import { Round } from '../../styles/styles'

export const SelectorButton = styled.button<{ size: string }>`
    background-color: rgb(128, 156, 170);
    font-size: 1rem;
    text-align: center;
    ${Round}
`

export const LabelAndPriceContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`

export const Span = styled.span`
    flex: 1;
    text-align: center;
`

export const SelectorContainer = styled.div`
    flex: 1;
    display: flex;
    background-color: white;
    justify-content: space-around;
    align-items: center;
    margin: auto;
    width: 400px;
    border-bottom: solid 1px black;
`