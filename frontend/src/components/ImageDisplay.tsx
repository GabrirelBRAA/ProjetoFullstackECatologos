import styled from "styled-components"

const ImageContainer = styled.div`
    height: 80vh;
    background-color: blue;
    text-align: center;
`

const Image = styled.img`
    display: inline-block;
    height: 80%;
    background-color: green;
    margin: auto;
`

const BackArrow = styled.button`
    position: absolute;
    top: 65%;
    left: 10px;
`

const ForwardArrow = styled.button`
    position: absolute;
    top: 65%;
    right: 10px;
`

const Options = styled.div`
    display: flex;
    justify-content: center;
`

export default function ImageDisplay(){
    return (
        <ImageContainer>
            <Image src="https://t.ctcdn.com.br/lvns56iaSMyHvyTur4JeYS_NYeY=/i606944.png"/>
            <BackArrow>Voltar</BackArrow>
            <ForwardArrow>Seguir</ForwardArrow>
            <Options>
                <button>Info</button>
                <button>Search</button>
                <button>Select Images</button>
                <button>Shopping cart</button>
            </Options>
        </ImageContainer>
    ) 
}