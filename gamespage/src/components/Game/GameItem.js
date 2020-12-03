import { GameContext } from "../../contexts/GameContext";
import {useContext, useState} from 'react';
import { Col, Card, Button, Modal } from 'react-bootstrap';
import axios from 'axios';
import Image from 'react-bootstrap/Image'

const GameItem = ( {id, name, price, image, console, description} ) => {

    const { game } = useContext(GameContext);
    const [gameState, setGame] = game;

    const { games } = useContext(GameContext);
    const [gamesState, setGames] = games;

    const setSelectedGame = () =>{
        setGame({id: id, name: name, price: price, image: image, console: console, description: description});
    }

    const deleteGame = () =>{

        const url = "https://localhost:5001/Games";
        axios.delete(`${url}/${id}`);

        //finner ikke bedre måte, re-rendrer ved dobbeltklikk, men med feilmelding 404
        axios.get( url )
            .then(response => {
                setGames(response.data);
            });

    }

    //modal
    const [show, setShow] = useState(false);

    const handleClose = () => {
      
      setShow(false);
      //send data to parent here?
      
      //setImage(imageState);
      //setGame( {...gameState, image: imageState.filePath});      //setImage(imageState);
      //alert(imageState.filePath);
  
    }

    const readMore = () => setShow(true);
    
    return (


<Col xs={ 12 } sm={ 6 } md={ 4 } lg={ 3 } xl={ 2 }> 
    <Card style={{ width:'15rem', height:'28rem' }}>
    <Image style={{ height:'15rem' }} variant ="top" src={`https://localhost:5001/images/${image}`} thumbnail />
        <Card.Body>
            <Card.Title as="h4">{name}</Card.Title>
            <Card.Text>{price},- </Card.Text>
            <Card.Text>{console}</Card.Text>
            <Card.Text>{description}</Card.Text>
        </Card.Body>
        <Button onClick={readMore}>Read More!</Button>
        <Button onClick={setSelectedGame}>Update</Button>
        <Button onClick={deleteGame}>Delete</Button>
    </Card>

    <Modal animation={false} size="lg" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>React Bootstrap Modal Example - ItSolutionStuff.com</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    
                    <Card style={{ width:'15rem', height:'28rem' }}>
                    <Image style={{ height:'15rem' }} variant ="top" src={`https://localhost:5001/images/${image}`} thumbnail />
                        <Card.Body>
                            <Card.Title as="h4">{name}</Card.Title>
                            <Card.Text>{price},- </Card.Text>
                            <Card.Text>{console}</Card.Text>
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

export default GameItem;