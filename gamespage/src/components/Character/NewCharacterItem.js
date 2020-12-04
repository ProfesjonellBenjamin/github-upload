import { CharacterContext } from "../../contexts/CharacterContext";
import {useContext, useState} from 'react';
import { Col, Card, Button, Modal, ButtonGroup } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

const NewCharacterItem = ( {id, name, description, image} ) => {

    const { character } = useContext(CharacterContext);
    const [characterState, setCharacter] = character;


    const [show, setShow] = useState(false);

    const handleClose = () => {
      
      setShow(false);

  
    }

    const readMore = () => setShow(true);

    return (

        <Col xs={ 12 } sm={ 6 } md={ 4 } lg={ 3 } xl={ 2 }> 
            <Card style={{ width:'15rem', height:'28rem' }}>
            <Image style={{ height:'15rem' }} variant ="top" src={`https://localhost:5001/images/${image}`} thumbnail />
                <Card.Body>
                    <Card.Title as="h4">{name}</Card.Title>
                </Card.Body>
                <ButtonGroup aria-label="Basic example">
                    <Button variant="secondary" onClick={readMore}>Read More</Button>

                </ButtonGroup>
    </Card>

    <Modal animation={false} size="lg" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    
                <Card className ="m-auto" style={{ width:'30rem', height:'28rem' }}>
                            <Image style={{ height:'15rem' }} variant ="top" src={`https://localhost:5001/images/${image}`} thumbnail />
                        <Card.Body>
                            <Card.Title as="h4" className="center">{name}</Card.Title>
                             <Card.Text>{description}</Card.Text>
                        </Card.Body>
                    </Card>


                </Modal.Body>
                <Modal.Footer>

                <Button variant="primary" onClick={handleClose}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
        </Col>


    )



}

export default NewCharacterItem;