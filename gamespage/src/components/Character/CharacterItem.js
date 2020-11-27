import { CharacterContext } from "../../contexts/CharacterContext";
import {useContext} from 'react';
import { Col, Card, Button } from 'react-bootstrap';

const CharacterItem = ( {id, name, description, image} ) => {

    const { character } = useContext(CharacterContext);
    const [characterState, setCharacter] = character;

    const setSelectedCharacter = () =>{
        setCharacter({id: id, name: name, description: description, image: image});
    }

    return (

            <Col>
                <Card>
                    <Card.Title>{name}</Card.Title>
                    <Card.Body>
                        <Card.Text>{description}</Card.Text>
                        <img src={`https://localhost:5001/images/${image}`}/>
                    </Card.Body>
                    <Button onClick={setSelectedCharacter}>Update</Button>
                </Card>
            
            </Col>



    )



}

export default CharacterItem;