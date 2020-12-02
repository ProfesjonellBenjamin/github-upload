import {Row} from 'react-bootstrap';
import {useContext} from 'react';
import {ImageContext} from '../../contexts/ImageContext';
import ImageItem from './ImageItem';

const ImageList = () => {

        const { images } = useContext( ImageContext );

        const [imagesState, setImages] = images;

        const generateImages = () =>{

            //console.log("imagesstate:" + imagesState);

            return imagesState.map((image, i) => {
                
                //console.log(image);

                return <ImageItem key={i} filePath={image} {...image}></ImageItem>
            })

            
        }


        return (


            <section>
                <h3>Image-List</h3>

                <Row>
                    {generateImages()}
                </Row>
            </section>
        )
}

export default ImageList;