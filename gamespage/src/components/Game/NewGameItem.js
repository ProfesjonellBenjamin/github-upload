import { GameContext } from "../../contexts/GameContext";
import {useContext} from 'react';
import { Col, Card, Button } from 'react-bootstrap';
import axios from 'axios';
import Image from 'react-bootstrap/Image'

const NewGameItem = ( {id, name, price, image, console, description} ) => {

    const { game } = useContext(GameContext);
    const [gameState, setGame] = game;

   

    
    return (


<Col xs={ 12 } sm={ 6 } md={ 4 } lg={ 3 } xl={ 2 }> 
    <Card style={{ width:'15rem', height:'25rem' }}>
    <Image style={{ height:'15rem' }} variant ="top" src={`https://localhost:5001/images/${image}`} thumbnail />
        <Card.Body>
            <Card.Title as="h4">{name}</Card.Title>
            <Card.Text>{price},- </Card.Text>
        </Card.Body>
        <Button >Read More!</Button>
    </Card>
</Col>
    

 

    )



}

export default NewGameItem;