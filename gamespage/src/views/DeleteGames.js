import {useState, useEffect} from 'react';
import GameDelete from '../components/Game/GameDelete';
import axios from 'axios';


const DeleteGames = () =>{

    const [games, setGames] = useState(
        [ {id:"999", name: "Fish", price: "1000", image: "dracula.png"} 
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