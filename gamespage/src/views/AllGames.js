import {GameProvider} from '../contexts/GameContext';
import GameList from '../components/Game/GameList';
import GameUpdate from '../components/Game/GameUpdate';
import GameCreate from '../components/Game/GameCreate';
import {ImageProvider} from '../contexts/ImageContext';

const AllGames = () => {


    return (

            <section>
                <h3>All Games</h3>

                <GameProvider>
                    <GameList></GameList>
                    <ImageProvider>
                        <GameCreate></GameCreate>


                    </ImageProvider>
                </GameProvider>
            
            </section>

    )


}

export default AllGames;