import {CharacterProvider} from '../contexts/CharacterContext';
import {GameProvider} from '../contexts/GameContext';
import CharacterList from '../components/Character/CharacterList';
import {ImageProvider} from '../contexts/ImageContext';
import CharacterCreate from '../components/Character/CharacterCreate';
import GameCreate from '../components/Game/GameCreate';

const AllCharacters = () => {


    return (

            <section>
                <h3>All Characters</h3>
                
                <CharacterProvider>
                    <CharacterList></CharacterList>
                    <ImageProvider>
                        <CharacterCreate></CharacterCreate>
                        


                    </ImageProvider>
                </CharacterProvider>

            </section>

    )


}

export default AllCharacters;