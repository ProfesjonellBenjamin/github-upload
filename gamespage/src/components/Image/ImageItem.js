import { ImageContext } from "../../contexts/ImageContext";
import {useContext} from 'react';
import { Col, Card, Button } from 'react-bootstrap';

const ImageItem = ( {filePath} ) => {

    const { image } = useContext(ImageContext);
    const [imageState, setImage] = image;

    const setSelectedImage = () => {
        setImage({filePath: filePath});
    }

    
    return (

            <Col>
                <Card>
                    <Card.Text>{filePath}</Card.Text>
                    
                    <Card.Body>
                        <img height="60" width="60" src={`https://localhost:5001/images/${filePath}`}/>
                    </Card.Body>
                    <Button onClick={setSelectedImage}>Update</Button>
                </Card>
            
            </Col>



    )



}

export default ImageItem;