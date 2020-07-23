import React from 'react';
import Homepage from './Homepage';
import {Switch, Route, BrowserRouter} from 'react-router-dom';

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path = "/">
            <Homepage/>
          </Route>
          <Route>
            <div>Page not found! Succotash</div>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
