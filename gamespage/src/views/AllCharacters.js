import {useState, useEffect} from 'react';
import CharacterItem from '../components/Character/CharacterItem';
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
            
            return <CharacterItem key = {i} { ...character } ></CharacterItem>

        })

    }


    return (

            <section>
                <h3>All Characters</h3>

                <p>characters.length: {characters.length}</p>
                { getCharacters()}
            </section>

    )


}

export default AllCharacters;