import { MouseEventHandler } from 'react'
import {Flex, SelectionContainer, CenteredTextSpan, Button} from './style'


export default function Nav({categoryNameWithAmount, advanceIndexByCategory, recedeIndexByCategory}: {categoryNameWithAmount: string ,advanceIndexByCategory: MouseEventHandler, recedeIndexByCategory: MouseEventHandler}) {
    return (
        <Flex>
            <Button size="30px">&lt;</Button>
            <SelectionContainer>
                <Button size="50px" onClick={recedeIndexByCategory}>&larr;</Button>
                <CenteredTextSpan>{categoryNameWithAmount}</CenteredTextSpan>
                <Button size="50px" onClick={advanceIndexByCategory}>&rarr;</Button>
            </SelectionContainer>
            <Button size="30px">F</Button>
        </Flex>
    )
}