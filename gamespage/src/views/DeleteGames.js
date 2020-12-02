import {useState, useEffect} from 'react';
import GameDelete from '../components/Game/GameDelete';
import axios from 'axios';



//OUTDATED: moved to GameCreate





const DeleteGames = () =>{

    const [games, setGames] = useState(
        [ {id:"0", name: "Fish", price: "1000", image: ""} 
    ]);

    useEffect( () => {
        const url = "https://localhost:5001/Games";
        axios.get( url )
            .then(response => {
                setGames(response.data);
            })

    },[])

    const getGames = () => {

        return games.map((game, i) => {
            
            return <GameDelete
             key = {i} 
             id= {game.id}
              name={game.name }>
              </GameDelete>

        })

    }


    return (

            <section>
                <h3>Delete Games</h3>

                <p>Games.length: {games.length}</p>
                { getGames()}
            </section>

    )


}

export default DeleteGames;