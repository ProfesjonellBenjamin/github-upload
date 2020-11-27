import { CharacterContext } from "../../contexts/CharacterContext";
import {useContext} from 'react';
import axios from 'axios';

const CharacterUpdate = () => {

    const { character } = useContext(CharacterContext);
    const [characterState, setCharacter] = character;

    const updateCharacter = () =>{
        
        const url = "https://localhost:5001/Characters";
        axios.put(`${url}/${characterState.id}`, characterState);

        
    }

    return(

        <section>
            <h3>Edit Character</h3>
            <label>Name:</label>
            <input onChange={(e)=>setCharacter( {...characterState, name: e.target.value})} 
            type="text" value={characterState.name}></input>
            <input onClick={updateCharacter} type="button" value="Change"></input>
        </section>
    )
}

export default CharacterUpdate;