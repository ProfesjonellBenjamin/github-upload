
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import AllCharacters from './views/AllCharacters';
import AllGames from './views/AllGames';
import CreateGame from './views/CreateGame';
import DeleteGames from './views/DeleteGames';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <ul>
          <li><Link to ="/">All Games</Link></li>
          <li><Link to ="/create-game">Create Game</Link></li>
          <li><Link to ="/delete-game">Delete Game</Link></li>
          <li><Link to ="/all-characters">All Characters</Link></li>
          
        </ul>
        <Switch>
          <Route exact path="/" component = {AllGames}></Route>
          <Route path="/create-game" component = {CreateGame}></Route>
          <Route path="/delete-game" component = {DeleteGames}></Route>
          <Route path="/all-characters" component = {AllCharacters}></Route>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
