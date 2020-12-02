import React, {useContext, useState} from 'react';
import { Button, Modal } from 'react-bootstrap';
import ImageUploader from './Image/ImageUploader';
import {ImageContext, ImageProvider} from '../contexts/ImageContext';
import ImageList from './Image/ImageList';
import ImageUpdate from './Image/ImageUpdate';   



//OUTDATED: moved to GameCreate




const ModalPopup = () => {
  const { image } = useContext(ImageContext);
  const [imageState, setImage] = image;
  
  const [show, setShow] = useState(false);

  const handleClose = () => {
    
    setShow(false);
    //send data to parent here?
    setImage(imageState);
    alert(imageState.filePath);

  }
  const handleShow = () => setShow(true);
   
  return (
    <div className="container">
      <h1>React Bootstrap Modal Example - ItSolutionStuff.com</h1>
   
      <Button variant="primary" onClick={handleShow}>
        Open Demo Model
      </Button>
   
      <Modal animation={false} size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>React Bootstrap Modal Example - ItSolutionStuff.com</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <ImageUploader/>
          <ImageProvider>
              <ImageList></ImageList>
              <ImageUpdate></ImageUpdate>
          </ImageProvider>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save It!
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
   
export default ModalPopup;