import { GameContext } from "../../contexts/GameContext";
import {useContext} from 'react';
import { Col, Card, Button } from 'react-bootstrap';
import axios from 'axios';

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

            <Col>
                <Card>
                    <Card.Title>{name}</Card.Title>
                    <Card.Body>
                        <Card.Text>{price}</Card.Text>
                        <img src={`https://localhost:5001/images/${image}`}/>
                    </Card.Body>
                    <Button onClick={setSelectedGame}>Update</Button>
                    <Button onClick={deleteGame}>Delete</Button>
                </Card>
            
            </Col>



    )



}

export default GameItem;