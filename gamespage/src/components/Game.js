const Game = ( {id, name, price, image} ) => {

    return (
        <article>
            <h3>{ name } (id: {id})</h3>
            <p>Price: {price}</p>
            <img src={`https://localhost:5001/images/${image}`}/>
        </article>


    )



}

export default Game;