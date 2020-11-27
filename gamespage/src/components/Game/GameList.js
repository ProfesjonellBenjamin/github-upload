import {Row} from 'react-bootstrap';
import {useContext} from 'react';
import {GameContext} from '../../contexts/GameContext';
import GameItem from './GameItem';

const GameList = () => {

        const { games } = useContext( GameContext );

        const [gamesState, setGames] = games;

        const generateGames = () =>{

            return gamesState.map((game, i) => {


                return <GameItem key={i} {...game}></GameItem>
            })


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