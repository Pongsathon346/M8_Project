import { Switch, Route} from 'react-router-dom'
import Homepage from './Pages/Homepage';
import Loginpage from './Pages/Loginpage'
import Favpage from './Pages/Favpage';


function App() {
  return(
    <Switch>
      <Route path="/fav">
        <Favpage />
      </Route>
      <Route path="/home">
        <Homepage />
      </Route>
      <Route path="/">
        <Loginpage />
      </Route>
    </Switch>
  )
}

export default App;
