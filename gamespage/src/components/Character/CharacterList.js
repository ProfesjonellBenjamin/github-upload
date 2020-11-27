import {Row} from 'react-bootstrap';
import {useContext} from 'react';
import {CharacterContext} from '../../contexts/CharacterContext';
import CharacterItem from './CharacterItem';

const CharacterList = () => {

        const { characters } = useContext( CharacterContext );

        const [charactersState, setCharacters] = characters;

        const generateCharacters = () =>{

            return charactersState.map((character, i) => {


                return <CharacterItem key={i} {...character}></CharacterItem>
            })


        }


        return (


            <section>
                <h3>Character-List</h3>

                <Row>
                    {generateCharacters()}
                </Row>
            </section>
        )
}

export default CharacterList;