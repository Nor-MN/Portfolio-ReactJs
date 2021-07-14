import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import Home from '../pages/Home';
import Achievement from '../pages/Achievements';
import NotFound from 'http-errors';

class App extends Component {
  render() {
    const App = () => (
      <>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/logro" component={Achievement} />
          <Redirect to="/" />
        </Switch>
      </>
    )
    return (
      <BrowserRouter>
        <ScrollToTop>
          <Switch>
            <App />
          </Switch>
        </ScrollToTop>
      </BrowserRouter>
    )
  }
}

export default App;
