import styled from "styled-components"

const Flex = styled.div`
    display: flex;
    background-color: red;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
`

const Paragraph = styled.p`
    flex: 1;
    display: block;
`

const Button = styled.button`
    display: block;
`

const SelectionContainer = styled.div`
    display: flex;
`

export default function Nav() {
    return (
        <Flex>
            <button>Botão de voltar</button>
            <SelectionContainer>
                <button>&larr;</button>
                <p>Selecionado atual</p>
                <button>&rarr;</button>
            </SelectionContainer>
            <button>Funções</button>
        </Flex>
    )
}