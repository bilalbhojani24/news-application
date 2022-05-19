import React, { Component } from 'react';
import HomePage from './pages/HomePage';
import Contact from './pages/Contact';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './style.css';
import ErrorPage from './pages/ErrorPage';
export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="*">
            <ErrorPage />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
