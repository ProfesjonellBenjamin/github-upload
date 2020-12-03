import { GameContext } from "../../contexts/GameContext";
import {useContext} from 'react';
import axios from 'axios';



//OUTDATED: moved to gameCreate



const GameUpdate = () => {

    const { game } = useContext(GameContext);
    const [gameState, setGame] = game;

    const updateGame = () =>{
        
        const url = "https://localhost:5001/Games";
        axios.put(`${url}/${gameState.id}`, gameState);

        
    }

    return(

        <section>
            <h3>Edit Game</h3>
            <label>Name:</label>
            <input onChange={(e)=>setGame( {...gameState, name: e.target.value})} 
                type="text" value={gameState.name}></input>

            <label>Image:</label>
            
            <img src={`https://localhost:5001/images/${gameState.image}`}/>
            <input onChange={(e)=>setGame( {...gameState, image: e.target.files[0].name})} 
                type="file"></input>
            <input type="button" value=" ... "></input>


            <input onClick={updateGame} type="button" value="Change"></input>
        </section>
    )
}

export default GameUpdate;