import {useEffect, useState, createContext} from 'react';
import axios from 'axios';
export const CharacterContext = createContext();

export const CharacterProvider = (props) => {

    const [character, setCharacter] = useState({id: "0", name: "9/11 RPG", description: "a", image: "frankenstein.png"})

    const [characters, setCharacters] = useState([
        {id: "1", name: "GTA Helstrøm rydder opp", description: "b", image: "frankenstein.png"},
        {id: "2", name: "GTA Helstrøm rydder opp 2", description: "c", image: "frankenstein.png"},
        {id: "3", name: "GTA Helstrøm rydder opp 3 nå rydder du opp", description: "d", image: "frankenstein.png"}
    ]);

    useEffect( () => {
        const url = "https://localhost:5001/Characters";
        axios.get( url )
            .then(response => {
                setCharacters(response.data);
            })

    },[])

    return(
        <CharacterContext.Provider value= { { characters: [characters, setCharacters], character: [character, setCharacter] } }>
            {props.children}
        </CharacterContext.Provider>

    )


}

