import {useState, useEffect} from 'react';
import Game from '../components/Game';
import axios from 'axios';

const AllGames = () => {

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
            
            return <Game key = {i} { ...game } ></Game>

        })

    }


    return (

            <section>
                <h3>All Games</h3>

                <p>Games.length: {games.length}</p>
                { getGames()}
            </section>

    )


}

export default AllGames;