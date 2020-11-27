const CharacterItem = ( {id, name, description, image} ) => {

    return (
        <article>
            <h3>{ name } (id: {id})</h3>
            <p>Price: {description}</p>
            <img src={`https://localhost:5001/images/${image}`}/>
        </article>


    )

}

export default CharacterItem;