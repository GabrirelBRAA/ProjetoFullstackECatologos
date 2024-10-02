import styled from 'styled-components'
import { Round } from '../../styles/styles'

export const Container = styled.div`
    flex: 1;
    display: flex;
    background-color: white;
    justify-content: space-around;
    align-items: center;
    margin: auto;
    width: 400px;
`

export const FlexItem = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    height: 100%;
    border-top: solid 1px black;
`

export const ChangeOrderButton = styled.button<{size: string}>`
    background-color: rgb(93, 160, 173);
    ${Round}
`

export const FilteredSVG = styled.img`
    filter: invert(100%) sepia(0%) saturate(7488%) hue-rotate(11deg) brightness(101%) contrast(96%);
`