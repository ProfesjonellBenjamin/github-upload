import {Row} from 'react-bootstrap';
import {useContext} from 'react';
import {CharacterContext} from '../../contexts/CharacterContext';
import NewCharacterItem from './NewCharacterItem';

const NewCharacterList = () => {

        const { characters } = useContext( CharacterContext );

        const [charactersState, setCharacters] = characters;

        const generateCharacters = () =>{

            return charactersState.map((character, i) => {


                return <NewCharacterItem key={i} {...character}></NewCharacterItem>
            })


        }


        return (


            <section>
               

                <Row x-={ 6 }>
                    {generateCharacters()}
                </Row>
            </section>
        )
}

export default NewCharacterList;