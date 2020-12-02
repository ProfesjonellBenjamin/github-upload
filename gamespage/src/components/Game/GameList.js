import {Row} from 'react-bootstrap';
import {useContext} from 'react';
import {GameContext} from '../../contexts/GameContext';
import GameItem from './GameItem';

const GameList = () => {

        const { games } = useContext( GameContext );

        const [gamesState, setGames] = games;

        //searchState prop?

        const generateGames = (filter) =>{

            return gamesState.map((game, i) => {

                return <GameItem key={i} {...game}></GameItem>
            })


        }

        const filterGames = (e) =>{
            return e.target.value;
        }

        return (


            <section>
                <h3>Game-List</h3>

                <Row>
                    {generateGames()}
                </Row>
            </section>
        )
}

export default GameList;