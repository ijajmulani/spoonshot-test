import React from 'react';
import Home from '../Home/Home';
import Header from '../Header/Header';
import MovieDetails from '../MovieDetails/MovieDetails';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieId: "",
    };
  }

  onMovieClickEvent = (e, movieId) => {
    e.preventDefault();
    this.setState({
      movieId,
    })
  }

  render() {
    const { movieId } = this.state;
    return(
      <React.Fragment>
        <Header/>
        <div className="container">
          {movieId ? <MovieDetails key={movieId} movieId={movieId} /> : <Home onMovieClickEvent={this.onMovieClickEvent} /> }
        </div>
      </React.Fragment>
    )
  }
}