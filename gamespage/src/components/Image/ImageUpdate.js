import { ImageContext } from "../../contexts/ImageContext";
import {useContext} from 'react';
import axios from 'axios';



//OUTDATED: used for testing




const ImageUpdate = () => {

    const { image } = useContext(ImageContext);
    const [imageState, setImage] = image;

    const updateImage = () =>{
        
        alert(imageState.filePath);

        
    }

    return(

        <section>
            <h3>Edit Image</h3>
            
            <label>Image:</label>
            
            <img src={`https://localhost:5001/images/${imageState.filePath}`}/>
            
            <input onClick={updateImage} type="button" value="Change"></input>
        </section>
    )
}

export default ImageUpdate;