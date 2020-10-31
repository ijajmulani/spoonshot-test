import React from 'react';
import { AppConfig } from '../../common/config';
import { convertRatingToPercentage, timeConvert } from '../../common/utility';
import TMDBCommunication from '../../communications/tmdb_communication';
import Cast from '../Cast/Cast';
import Keywords from '../Keywords/Keywords';
import Media from '../Media/Media';
import Overview from '../Overview/Overview';
import Recommendations from '../Recommendations/Recommendations';
import './MovieDetails.css';

export default class MovieDetails extends React.Component {
  constructor(props) {
    super(props);
    this.tmdbCommunication = new TMDBCommunication();
    this.state = {
      details : {}
    };
  }

  componentDidMount() {
    this.tmdbCommunication.getMovieDetails(this.props.movieId).then(res => {
      console.log(res)
      this.setState({
        details: res
      })
    });
  }

  onError = (e) => {
    e.target.src = "//www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg";
  }

  render() {
    const { details } =  this.state;
    const genres = details.genres ? details.genres.reduce((acc, genre) => acc + ", " + genre.name, '') : '';
    const duration = timeConvert(details.runtime)
    return (
      <React.Fragment>
        <div className="hero-image-wrapper">
          <img className="hero-image" loading="lazy" onError={this.onError} src={`${AppConfig.Poster780BaseURL}${details.poster_path}`} alt={details.title} />
          <div className="shadow"></div>
          <div className="details-wrapper">
            <span className="movie-name">{details.title}</span>
            <div className="details">{details.release_date} {details.original_language ? `(${details.original_language.toUpperCase()})` : ""} | {genres} | {duration}</div>
          </div>
          <div className="user-score">{convertRatingToPercentage(details.vote_average)}</div>
        </div>
        <Overview  details={details}/>
        <hr></hr>
        <Cast movieId={this.props.movieId} />
        <div className="media-keyword-wrapper">
          <Media details={details} movieId={this.props.movieId} />
          <Keywords movieId={this.props.movieId} />
        </div>
        <Recommendations movieId={this.props.movieId} />
      </React.Fragment>
    );
  }
}