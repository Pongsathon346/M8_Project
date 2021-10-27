import { Switch, Route} from 'react-router-dom'
import Homepage from './Pages/Homepage';
import Loginpage from './Pages/Loginpage'
import Regpage from './Pages/Regpage';
import Favpage from './Pages/Favpage';
import Lyricpage from './Pages/Lyricpage';


function App() {
  return(
    <Switch>
      <Route path="/lyric/:artist&:song">
        <Lyricpage />
      </Route>
      <Route path="/fav">
        <Favpage />
      </Route>
      <Route path="/home">
        <Homepage />
      </Route>
      <Route path="/reg">
        <Regpage />
      </Route>
      <Route path="/">
        <Loginpage />
      </Route>
    </Switch>
  )
}

export default App;
