
import {ImageContext, ImageProvider} from '../contexts/ImageContext';
import GameCreate from '../components/Game/GameCreate';



//OUTDATED: gamecreate has been moved to AllGames (which will be overview for admin)




const CreateGame = () => {


    return (
        <section>
            <ImageProvider>

                <GameCreate></GameCreate>

            </ImageProvider>
        </section>

    )


}

export default CreateGame;