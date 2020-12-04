import {Row, Col} from 'react-bootstrap';
import {useContext, useState} from 'react';
import {CharacterContext} from '../../contexts/CharacterContext';
import NewCharacterItem from './NewCharacterItem';

const NewCharacterList = () => {

        const { characters } = useContext( CharacterContext );

        const [charactersState, setCharacters] = characters;
        const [filter, setFilter] = useState("");


        const generateCharacters = () =>{

            return charactersState.filter(obj => obj.name.includes(filter)).map((character, i) => {
                //alert(character.name);
                return <NewCharacterItem key={i} {...character}></NewCharacterItem>
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

                <Row x-={ 6 }>
                    {generateCharacters()}
                </Row>
            </section>
        )
}

export default NewCharacterList;