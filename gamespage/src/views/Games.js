import {GameProvider} from '../contexts/GameContext';
import NewGameList from '../components/Game/NewGameList';

const Games = () => {


    return (

            <section>
                <h3>Games</h3>

                <GameProvider>
                    <NewGameList> </NewGameList>
                    
                        


                   
                </GameProvider>
            
            </section>

    )


}

export default Games;