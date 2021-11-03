import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './Nav/NavBar';
import HomeContainer from './Album/Home/HomeContainer';
import ShowContainer from './Album/Show/ShowContainer';

const App = () => {
  return (
    <>
      <NavBar />
      <div className="main">
        <Switch>
          <Route exact path="/albums" component={HomeContainer} />
          <Route path="/albums/:id" component={ShowContainer} />
        </Switch>
      </div>
    </>
  )
}

export default App;