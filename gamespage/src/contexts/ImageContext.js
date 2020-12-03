import { useEffect, useState, createContext} from 'react';
import axios from 'axios';
export const ImageContext = createContext();

export const ImageProvider = (props) => {

    const [image, setImage] = useState({filePath: ""})

    const [images, setImages] = useState([
        {filePath: "frankenstein.png"},
        {filePath: "ghost.png"},
        {filePath: "dracula.png"}
    ]);

    useEffect( () => {
        //getImages();
        const url = "https://localhost:5001/ImageUpload";
        axios.get( url )
            .then(response => {
                setImages(response.data);
            });
    },[]);

    //how to reference method in context/provider
    function getImages() {
        alert("hei");
    }
        
    
    return(
        <ImageContext.Provider value = { { images: [images, setImages], image: [image, setImage] } }>
            {props.children}
        </ImageContext.Provider>

    )


}

export function test (){
    alert("hei");
}
