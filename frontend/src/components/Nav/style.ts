import styled from 'styled-components'
import { Round } from '../../styles/styles'

export const Flex = styled.div`
    flex: 1;
    max-height: 7vh;
    display: flex;
    background-color: red;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    background-color: rgb(128, 156, 170);
`

export const Paragraph = styled.p`
    flex: 1;
    display: block;
`

export const SelectionContainer = styled.div`
    display: flex;
`
export const CenteredTextSpan = styled.span`
    text-align: center;
    margin: auto;
`

export const Button = styled.button<{size: string}>`
    background-color: white;
    color: black;
    ${Round}
`