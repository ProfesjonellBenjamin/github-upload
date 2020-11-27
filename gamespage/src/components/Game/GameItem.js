import { GameContext } from "../../contexts/GameContext";
import {useContext} from 'react';
import { Col, Card, Button } from 'react-bootstrap';

const GameItem = ( {id, name, price, image} ) => {

    const { game } = useContext(GameContext);
    const [gameState, setGame] = game;

    const setSelectedGame = () =>{
        setGame({id: id, name: name, price: price, image: image});
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
                </Card>
            
            </Col>



    )



}

export default GameItem;