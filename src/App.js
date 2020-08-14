import React from 'react';
import Homepage from './Homepage';
import Blackjack from './Blackjack';
import Poker from './Poker';
import TarunQuiz from './TarunQuiz';
import Taboo from './Taboo';
import Set from './Set';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>

          <Route exact path = "/">
            <Homepage/>
          </Route>

          <Route exact path = "/blackjack">
            <Blackjack/>
          </Route>

          <Route exact path = "/poker">
            <Poker/>
          </Route>

          <Route exact path = "/TarunQuiz">
            <TarunQuiz/>
          </Route>

          <Route exact path = "/taboo">
            <Taboo/>
          </Route>

          <Route exact path = "/set">
            <Set/>
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
