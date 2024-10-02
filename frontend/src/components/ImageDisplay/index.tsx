import { Image } from "../../types/image"
import { MouseEventHandler, useState, useEffect } from "react"
import { ImageContainer, CurrentImage, BackArrow, ForwardArrow, Options, RoundButton, BorderedImage} from "./style";
import { SearchModal } from "../SearchModal";
import { InfoModal } from "../InfoModal";


export default function ImageDisplay({ images, indexLeft, indexRight }: { images: Image[], indexLeft: MouseEventHandler, indexRight: MouseEventHandler }) {
    const [imagesElements, setImageElements] = useState<JSX.Element[]>([]);
    const [currentImage, setCurrentImage] = useState<JSX.Element>(<h1>Loading...</h1>);
    const [infoBoolean, setInfoBoolean] = useState(false)
    const [searchBoolean, setSearchBoolean] = useState(false)

    const changeInfoBoolean = () => {
        setInfoBoolean((previous) => {
            return !previous;
        })
    }

    const changeSearchBoolean = () => {
        setSearchBoolean((previous) => {
            return !previous;
        })
    }

    function updateImage(index: number){
        setCurrentImage(
            <CurrentImage src={import.meta.env['VITE_IMAGE_PATH'] + images[index].company_key + '/' + images[index].path} />
        )
    }

    useEffect(() => {
        const images_elements: JSX.Element[] = [];
        images.forEach((image) => {
            var i = import.meta.env['VITE_IMAGE_PATH'] + image.company_key + '/' + image.path;
            images_elements.push(<BorderedImage key={image.order} height={80} width={80} src={i} onClick={() => { updateImage(images.indexOf(image)) }} />)
        })
        setImageElements(images_elements)
        updateImage(0)

    }, [images])

    return (
        <ImageContainer>
            {currentImage}
            <BackArrow size="50px" onClick={indexLeft}>Voltar</BackArrow>
            <ForwardArrow size="50px" onClick={indexRight}>Seguir</ForwardArrow>
            <Options>
                <RoundButton size="45px" onClick={changeInfoBoolean}>Info</RoundButton>
                <RoundButton size="45px" onClick={changeSearchBoolean}>Search</RoundButton>
                <div>{imagesElements}</div>
                <RoundButton size="60px">Shopping cart</RoundButton>
            </Options>
            <SearchModal open={searchBoolean} changeSearchBoolean={changeSearchBoolean}/>
            <InfoModal open={infoBoolean} changeInfoBoolean={changeInfoBoolean}/>
        </ImageContainer>
    )
}