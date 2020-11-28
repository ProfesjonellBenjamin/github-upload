import {GameProvider} from '../contexts/GameContext';
import GameList from '../components/Game/GameList';
import GameUpdate from '../components/Game/GameUpdate';

const AllGames = () => {


    return (

            <section>
                <h3>All Games</h3>
                <GameProvider>
                    <GameList></GameList>
                    <GameUpdate></GameUpdate>
                </GameProvider>
            </section>

    )


}

export default AllGames;