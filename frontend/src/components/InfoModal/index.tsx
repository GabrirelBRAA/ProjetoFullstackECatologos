import { MouseEventHandler } from 'react'
import { useGlobalContext } from '../App'
import { FadeDiv, Modal, ModalHeader } from '../../styles/styles'
import { InfoFlexDisplay } from './style'


export function InfoModal({ open, changeInfoBoolean}: { open: boolean, changeInfoBoolean: MouseEventHandler}) {
    const {product} = useGlobalContext()
    return <div>
        <FadeDiv display={open ? "block" : "none"} onClick={changeInfoBoolean}></FadeDiv>
        <Modal open={open}>
            <ModalHeader>Info Modal</ModalHeader>
            <InfoFlexDisplay>
                <span><strong>Nome do Produto: </strong>{product!.name}</span>
                <span><strong>Referência: </strong>{product!.reference}</span>
                <span><strong>Marca: </strong></span>
                <span><strong>Categoria: </strong>{product!.category}</span>
                <span><strong>Gênero: </strong></span>
            </InfoFlexDisplay>
        </Modal>
    </div>
}