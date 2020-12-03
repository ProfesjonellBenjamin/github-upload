import {Row} from 'react-bootstrap';
import {useContext, useState} from 'react';
import {GameContext} from '../../contexts/GameContext';
import GameItem from './GameItem';

const GameList = () => {

        const { games } = useContext( GameContext );

        const [gamesState, setGames] = games;

        const [filter, setFilter] = useState("");


        //searchState prop?

        const generateGames = () =>{

            return gamesState.filter(obj => obj.name.includes(filter)).map((game, i) => {
                //alert(game.name);
                return <GameItem key={i} {...game}></GameItem>
                }
            
            )


        }

        const filterGames = (e) =>{
            setFilter(e.target.value);
        }

        return (


            <section>
                <h3>Game-List</h3>
                <input onChange={filterGames} type="text"></input>
                {/* dropdown ps / xbox / both */}
                {/* dropdown sjanger? */}
                

                <Row xl={ 6 }>
                    {generateGames()}
                </Row>
            </section>
        )
}

export default GameList;