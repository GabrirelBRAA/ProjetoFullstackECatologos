import { FadeDiv, Modal, ModalHeader } from '../../styles/styles'
import { MouseEventHandler, useState } from 'react'
import { useGlobalContext } from '../App'
import { Input, Button, Error } from './style'


export function SearchModal({open, changeSearchBoolean}: {open: boolean, changeSearchBoolean: MouseEventHandler}){
        const {findAndChangeProductByRef} = useGlobalContext()

        const [error, setError] = useState(false)

        const onClick = () => {
            let input = document.getElementById('ref-input') as HTMLInputElement;
            const reference = input.value
            
            if (findAndChangeProductByRef(reference)){
                setError(false)
            } else {
                setError(true)
            }
        }

        return <div>
        <FadeDiv display={open ? "block" : "none"} onClick={changeSearchBoolean}></FadeDiv>
        <Modal open={open}>
            <ModalHeader>Search Modal</ModalHeader>
            <Input id="ref-input" type="text" placeholder="00.00.0000"/>
            {error ? <><br/><Error>Referência não encontrada</Error></> : null}
            <br/>
            <Button onClick={onClick}>Buscar</Button>
        </Modal>
        </div>
}