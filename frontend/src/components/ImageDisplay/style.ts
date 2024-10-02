import styled from "styled-components"
import { Round } from "../../styles/styles"

export const ImageContainer = styled.div`
    position: relative;
    background-color: white;
    text-align: center;
    flex: 1;
`

export const CurrentImage = styled.img`
    display: inline-block;
    height: 60vh;
    background-color: green;
    margin: auto;
`

export const BackArrow = styled.button<{size: string}>`
    position: absolute;
    top: 50%;
    left: 20px;
    height: 50px;
    background-color: rgb(128, 156, 170);
    ${Round}
`

export const ForwardArrow = styled.button<{size: string}>`
    position: absolute;
    top: 50%;
    right: 20px;
    height: 50px;
    background-color: rgb(128, 156, 170);
    ${Round}
`

export const RoundButton = styled.button<{size: string}>`
    height: 50px;
    color: white;
    text-align: center;
    background-color: rgb(128, 156, 170);
    ${Round}
`

export const Options = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: solid 4px rgb(128, 156, 170);
    padding-top: 4px;
`

export const BorderedImage = styled.img`
    border: solid 1px rgb(128, 156, 170);
    margin-left: 3px;
`