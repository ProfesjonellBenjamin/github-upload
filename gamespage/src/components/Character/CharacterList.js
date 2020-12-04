import {Row, Col} from 'react-bootstrap';
import {useContext, useState} from 'react';
import {CharacterContext} from '../../contexts/CharacterContext';
import CharacterItem from './CharacterItem';

const CharacterList = () => {

        const { characters } = useContext( CharacterContext );

        const [charactersState, setCharacters] = characters;
        const [filter, setFilter] = useState("");


        const generateCharacters = () =>{

            return charactersState.filter(obj => obj.name.includes(filter)).map((character, i) => {
                //alert(character.name);
                return <CharacterItem key={i} {...character}></CharacterItem>
                }
            
            )


        }

        const filterCharacters = (e) =>{
            setFilter(e.target.value);
        }

        return (


            <section>
                <Row>

                    <Col>
                    <input onChange={filterCharacters} placeholder="Search name..." type="text"></input>

                    </Col>
                </Row>


                <Row>
                    {generateCharacters()}
                </Row>
            </section>
        )
}

export default CharacterList;