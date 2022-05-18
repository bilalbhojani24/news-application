import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Contact from './pages/Contact';
import HomePage from './pages/HomePage';
import NewsPage from './pages/NewsPage';
import ErrorPage from './pages/ErrorPage';
import './style.css';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/general">
          <NewsPage key="general" category="general" country="us" />
        </Route>
        <Route exact path="/business">
          <NewsPage key="business" category="business" country="us" />
        </Route>
        <Route exact path="/entertainment">
          <NewsPage key="entertainment" category="entertainment" country="us" />
        </Route>
        <Route exact path="/science">
          <NewsPage key="science" category="science" country="us" />
        </Route>
        <Route exact path="/technology">
          <NewsPage key="technology" category="technology" country="us" />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/details">
          <HomePage />
        </Route>
        <Route path="*">
          <ErrorPage />
        </Route>
      </Switch>
      {/* <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/general"
          element={<NewsPage category="general" country="us" />}
        />
        <Route
          path="/business"
          element={<NewsPage category="business" country="us" />}
        />
        <Route
          path="/entertainment"
          element={<NewsPage category="entertainment" country="us" />}
        />
        <Route
          path="/science"
          element={<NewsPage category="science" country="us" />}
        />
        <Route
          path="/technology"
          element={<NewsPage category="technology" country="us" />}
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes> */}
    </BrowserRouter>
  );
};

export default App;
