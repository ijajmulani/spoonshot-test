import React from 'react';
import Home from '../Home/Home';
import Header from '../Header/Header';
import MovieDetails from '../MovieDetails/MovieDetails';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default class App extends React.Component {

  render() {
    return(
      <Router>
        <Header/>
        <div className="container">
          <Switch>
            <Route path={`/spoonshot-test/build/movie/:movieId`}>
              <MovieDetails />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}