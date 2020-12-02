
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';

import AllCharacters from '../views/AllCharacters';
import AllGames from '../views/AllGames';
import AllImages from '../views/AllImages';

import CreateGame from '../views/CreateGame';
import DeleteGames from '../views/DeleteGames';

const Routes = () =>{

    return (
        <BrowserRouter>
            
        <MainNavigation></MainNavigation>
        <Switch>
          <Route exact path="/" component = {AllGames}></Route>
          <Route path="/create-game" component = {CreateGame}></Route>
          <Route path="/delete-game" component = {DeleteGames}></Route>
          <Route path="/all-characters" component = {AllCharacters}></Route>
          <Route path="/all-images" component = {AllImages}></Route>

        </Switch>
        </BrowserRouter>


    )


}

export default Routes;