import {Row} from 'react-bootstrap';
import {useContext} from 'react';
import {GameContext} from '../../contexts/GameContext';
import NewGameItem from './NewGameItem';

const NewGameList = () => {

        const { games } = useContext( GameContext );

        const [gamesState, setGames] = games;

        //searchState prop?

        const generateGames = (filter) =>{

            return gamesState.map((game, i) => {

                return <NewGameItem key={i} {...game}></NewGameItem>
            })


        }

        const filterGames = (e) =>{
            return e.target.value;
        }

        return (


            <section>
                

                <Row xl={ 6 }>
                    {generateGames()}
                </Row>
            </section>
        )
}

export default NewGameList;