import { CharacterContext } from "../../contexts/CharacterContext";
import {useContext, useState} from 'react';
import { Col, Card, Button, Modal } from 'react-bootstrap';
import axios from 'axios';
import Image from 'react-bootstrap/Image';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const CharacterItem = ( {id, name, image, description} ) => {

    const { character } = useContext(CharacterContext);
    const [characterState, setCharacter] = character;

    const { characters } = useContext(CharacterContext);
    const [charactersState, setCharacters] = characters;

    const setSelectedCharacter = () =>{
        setCharacter({id: id, name: name, image: image, description: description});
    }

    const deleteCharacter = () =>{

        const url = "https://localhost:5001/Characters";
        axios.delete(`${url}/${id}`);

        //finner ikke bedre måte, re-rendrer ved dobbeltklikk, men med feilmelding 404
        axios.get( url )
            .then(response => {
                setCharacters(response.data);
            });

    }

    //modal
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
            <Button variant="secondary" onClick={setSelectedCharacter}>Edit</Button>
            <Button variant="secondary" onClick={deleteCharacter}>Delete</Button>
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

export default CharacterItem;