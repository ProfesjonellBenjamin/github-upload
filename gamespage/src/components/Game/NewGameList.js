import {Row, Col} from 'react-bootstrap';
import {useContext, useState} from 'react';
import {GameContext} from '../../contexts/GameContext';
import NewGameItem from './NewGameItem';
const NewGameList = () => {

        const { games } = useContext( GameContext );

        const [gamesState, setGames] = games;
        const [filter, setFilter] = useState("");

        //searchState prop?

        const generateGames = () =>{

            return gamesState.filter(obj => obj.name.includes(filter) || obj.console.includes(filter)).map((game, i) => {
                //alert(game.name);
                return <NewGameItem key={i} {...game}></NewGameItem>
                }
            
            )


        }

        const filterGames = (e) =>{
            setFilter(e.target.value);
        }

        return (


            <section>
                 <Row>

                    <Col>
                        <input onChange={filterGames} placeholder="Search name, Console..." type="text"></input>

                    </Col>
                </Row>

                <Row xl={ 6 }>
                    {generateGames()}
                </Row>
            </section>
        )
}

export default NewGameList;