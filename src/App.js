import { Route, Switch } from 'react-router-dom';
import NavBar from './Nav/NavBar';
import HomeContainer from './Album/Home/HomeContainer';
import ShowContainer from './Album/Show/ShowContainer';

const App = () => {
  return (
    <div className="App">
      <NavBar className="NavBar" />
      <div className="App_routing">
        <Switch>
          <Route 
            exact 
            path="/albums" 
            component={HomeContainer} 
          />
          <Route 
            path="/albums/:id" 
            component={ShowContainer} 
          />
        </Switch>
      </div>
    </div>
  )
}

export default App;