import {CharacterProvider} from '../contexts/CharacterContext';
import NewCharacterList from '../components/Character/NewCharacterList'


const AllCharacters = () => {


    return (

            <section>
                <h3>Characters</h3>
                
                <CharacterProvider>
                    <NewCharacterList></NewCharacterList>
                    
                </CharacterProvider>

            </section>

    )


}

export default AllCharacters;