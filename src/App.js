import React, { Component } from 'react';
import HomePage from './pages/HomePage';
import Contact from './pages/Contact';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './style.css';
import ErrorPage from './pages/ErrorPage';
import NewsPage from './pages/NewsPage';
export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/general">
            <NewsPage
              key="General"
              category="General"
              country="us"
              page={1}
              pageSize={10}
            />
          </Route>
          <Route exact path="/entertainment">
            <NewsPage
              key="Entertainment"
              category="Entertainment"
              country="us"
              page={1}
              pageSize={10}
            />
          </Route>
          <Route exact path="/science">
            <NewsPage
              key="Science"
              category="Science"
              country="us"
              page={1}
              pageSize={10}
            />
          </Route>
          <Route exact path="/health">
            <NewsPage
              key="Health"
              category="Health"
              country="us"
              page={1}
              pageSize={10}
            />
          </Route>
          <Route exact path="/sports">
            <NewsPage
              key="Sports"
              category="Sports"
              country="us"
              page={1}
              pageSize={10}
            />
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
