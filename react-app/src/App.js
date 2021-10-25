import { Switch, Route} from 'react-router-dom'
import Homepage from './Pages/Homepage';



function App() {
  return(
    <Switch>
      <Route path="/">
        <Homepage />
      </Route>
    </Switch>
  )
}

export default App;
