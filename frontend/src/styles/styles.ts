import styled, {css} from 'styled-components'

export const Round = css<{size: string}>`
    border-radius: 50%;
    width: ${p => p.size || "50px"};
    height: ${p => p.size || "50px"};
    border: none;
    margin: 0 20px
`

export const FadeDiv = styled.div<{ display: string }>`
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 998;
    display: ${p => p.display};
`

export const Modal = styled.dialog`
    position: fixed;
    margin: auto;
    top: 15%;
    border: none;
    background-color: white;
    z-index: 999;
    margin: none;
    padding: 0;
    height: 500px;
    width: 300px;
    color: black;
`

export const ModalHeader = styled.h2`
    color: white;
    background-color: rgb(128, 156, 170);
    margin: 0;
`