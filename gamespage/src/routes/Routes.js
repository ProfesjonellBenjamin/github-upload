
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';

import AllCharacters from '../views/AllCharacters';
import AllGames from '../views/AllGames';
import AllImages from '../views/AllImages';
import Frontpage from '../views/Frontpage';

import CreateGame from '../views/CreateGame';
import DeleteGames from '../views/DeleteGames';
import Games from '../views/Games';
import Characters from '../views/Characters';

const Routes = () =>{

    return (
        <BrowserRouter>
            
        <MainNavigation></MainNavigation>
        <Switch>
          <Route exact path="/" component = {Frontpage} ></Route>
          <Route path="/all-games" component = {AllGames}></Route>
          
          <Route path="/all-characters" component = {AllCharacters}></Route>

          <Route path="/games" component = {Games}></Route>
          <Route path="/characters" component = {Characters}></Route>


      

        </Switch>
        </BrowserRouter>


    )


}

export default Routes;