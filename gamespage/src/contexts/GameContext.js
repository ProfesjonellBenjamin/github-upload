import {useEffect, useState, createContext} from 'react';
import axios from 'axios';
export const GameContext = createContext();

export const GameProvider = (props) => {

    const [game, setGame] = useState({id: "0", name: "", price: 0, image: ""})

    const [games, setGames] = useState([
        {id: "0", name: "GTA Helstrøm rydder opp", price: 0, image: ""},
        {id: "0", name: "GTA Helstrøm rydder opp 2 på tide å rydde opp", price: 0, image: ""},
        {id: "0", name: "GTA Helstrøm rydder opp 3 nå rydder du opp", price: 0, image: ""}
    ]);

    useEffect( () => {
        const url = "https://localhost:5001/Games";
        axios.get( url )
            .then(response => {
                setGames(response.data);
            })

    },[])

    return(
        <GameContext.Provider value= { { games: [games, setGames], game: [game, setGame] } }>
            {props.children}
        </GameContext.Provider>

    )


}

