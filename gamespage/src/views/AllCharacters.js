import {useState, useEffect} from 'react';
import Character from '../components/Character';
import axios from 'axios';

const AllCharacters = () => {

    const [characters, setCharacters] = useState(
        [ {id:"999", name: "Fish", description: "1000", image: "dracula.png"} 
    ]);

    useEffect( () => {
        const url = "https://localhost:5001/Characters";
        axios.get( url )
            .then(response => {
                setCharacters(response.data);
            })

    },[])

    const getCharacters = () => {

        return characters.map((character, i) => {
            
            return <Character key = {i} { ...character } ></Character>

        })

    }


    return (

            <section>
                <h3>All Characters</h3>

                <p>Characters.length: {characters.length}</p>
                { getCharacters()}
            </section>

    )


}

export default AllCharacters;