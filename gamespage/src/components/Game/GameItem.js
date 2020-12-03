import { GameContext } from "../../contexts/GameContext";
import {useContext} from 'react';
import { Col, Card, Button } from 'react-bootstrap';
import axios from 'axios';
import Image from 'react-bootstrap/Image'

const GameItem = ( {id, name, price, image} ) => {

    const { game } = useContext(GameContext);
    const [gameState, setGame] = game;

    const { games } = useContext(GameContext);
    const [gamesState, setGames] = games;

    const setSelectedGame = () =>{
        setGame({id: id, name: name, price: price, image: image});
    }

    const deleteGame = () =>{

        const url = "https://localhost:5001/Games";
        alert("before delete");
        axios.delete(`${url}/${id}`);

        alert("before get");
        //finner ikke bedre måte, re-rendrer ved dobbeltklikk, men med feilmelding 404
        axios.get( url )
            .then(response => {
                setGames(response.data);
            });

        alert("after get");
    }
    
    return (


<Col xs={ 12 } sm={ 6 } md={ 4 } lg={ 3 } xl={ 2 }> 
    <Card style={{ width:'15rem', height:'25rem' }}>
    <Image style={{ height:'15rem' }} variant ="top" src={`https://localhost:5001/images/${image}`} thumbnail />
        <Card.Body>
            <Card.Title as="h4">{name}</Card.Title>
            <Card.Text>{price},- </Card.Text>
        </Card.Body>
        <Button onClick={setSelectedGame}>Update</Button>
        <Button onClick={deleteGame}>Delete</Button>
    </Card>
</Col>
    

 

    )



}

export default GameItem;