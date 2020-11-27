import {useEffect, useState, createContext} from 'react';
import axios from 'axios';
export const GameContext = createContext();

export const GameProvider = (props) => {

    const [game, setGame] = useState({id: "0", name: "9/11 RPG", price: 0, image: "frankenstein.png"})

    const [games, setGames] = useState([
        {id: "1", name: "GTA Helstrøm rydder opp", price: 0, image: "frankenstein.png"},
        {id: "2", name: "GTA Helstrøm rydder opp 2", price: 0, image: "frankenstein.png"},
        {id: "3", name: "GTA Helstrøm rydder opp 3 nå rydder du opp", price: 0, image: "frankenstein.png"}
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

