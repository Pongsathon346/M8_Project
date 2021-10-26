import { Switch, Route} from 'react-router-dom'
import Homepage from './Pages/Homepage';
import Loginpage from './Pages/Loginpage'



function App() {
  return(
    <Switch>
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
