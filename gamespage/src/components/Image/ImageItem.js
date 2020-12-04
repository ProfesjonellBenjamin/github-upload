import { ImageContext } from "../../contexts/ImageContext";
import {useContext} from 'react';
import { Col, Card, Button, Row } from 'react-bootstrap';

const ImageItem = ( {filePath} ) => {

    const { image } = useContext(ImageContext);
    const [imageState, setImage] = image;

    const setSelectedImage = () => {
        setImage({filePath: filePath});
    }

    
    return (

            

            <Row xl={ 6 }>
            <Col xs={ 12 } sm={ 6 } md={ 4 } lg={ 3 } xl={ 2 }>
            <Card style={{ width:'8rem', height:'10rem' }}>
                <Card.Text>{filePath}</Card.Text>

                <Card.Body>

                    <img height="40" width="40" src={`https://localhost:5001/images/${filePath}`}/>
                </Card.Body>
                <Button onClick={setSelectedImage}>Select</Button>
            </Card>

            </Col>
            </Row>



    )



}

export default ImageItem;