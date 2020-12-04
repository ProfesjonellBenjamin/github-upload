import {useEffect, useState, createContext} from 'react';
import axios from 'axios';
export const CharacterContext = createContext();

export const CharacterProvider = (props) => {

    const [character, setCharacter] = useState({id: "0", name: "", description: "", image: ""})

    const [characters, setCharacters] = useState([
        {id: "0", name: "GTA Helstrøm rydder opp", description: "b", image: ""},
        {id: "0", name: "GTA Helstrøm rydder opp 2", description: "c", image: ""},
        {id: "0", name: "GTA Helstrøm rydder opp 3 nå rydder du opp", description: "d", image: ""}
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

