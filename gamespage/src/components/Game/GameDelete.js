import axios from 'axios';

const GameDelete = ( props ) => {

    const deleteGame = () =>{

        const url = "https://localhost:5001/Games";
        
        axios.delete(`${url}/${props.id}`);

    }


    return(
        <article>
            <h3>{props.name}</h3>
            <input onClick= {deleteGame} type="button" value="Delete Game" />
        </article>
    )



}

export default GameDelete;