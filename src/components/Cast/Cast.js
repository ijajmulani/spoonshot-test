import React from 'react';
import { AppConfig } from '../../common/config';
import TMDBCommunication from '../../communications/tmdb_communication';
import './Cast.css';

export default class Cast extends React.Component {
  constructor(props) {
    super(props);
    this.tmdbCommunication = new TMDBCommunication();
    this.state = {
      credits: {},
    }
  }

  componentDidMount() {
    this.tmdbCommunication.getCredits(this.props.movieId).then(res => {
      this.setState({
        credits: res,
      })
    });
  }

  onError = (e) => {
    e.target.src = "//www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg";
  }

  render() {
    const { cast } = this.state.credits;

    return (
      cast ? (
        <div className="cast-wrapper">
          <div className="cast-heading-wrapper">
            <h2 className="cast-heading">Cast</h2>
            <div className="navigation-icons">
              <svg className="left-nav" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
              <svg className="right-nav active" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
            </div>
          </div>
          <div className="actors">
            {cast.slice(0, 4).map((actor) => (
              <div className="actor-card" key={actor.id}>
                <img onError={this.onError} className="actor-image" src={`${AppConfig.Poster342BaseURL}${actor.profile_path}`} alt={actor.name} />
                <span className="actor-name" >{actor.name}</span> 
                <span className="actor-charactor">{actor.character}</span> 
              </div>
            ))}
          </div>

        </div>
      ) : null
    ) 
  }
}