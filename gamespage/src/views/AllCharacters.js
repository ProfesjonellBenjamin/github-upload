import {CharacterProvider} from '../contexts/CharacterContext';
import CharacterList from '../components/Character/CharacterList';
import CharacterUpdate from '../components/Character/CharacterUpdate';

const AllCharacters = () => {


    return (

            <section>
                <h3>All Characters</h3>
                
                <CharacterProvider>
                    <CharacterList></CharacterList>
                    <CharacterUpdate></CharacterUpdate>
                </CharacterProvider>

            </section>

    )


}

export default AllCharacters;