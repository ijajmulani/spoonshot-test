import React from 'react';
import { AppConfig } from '../../common/config';
import { convertRatingToPercentage, timeConvert } from '../../common/utility';
import './HeroImage.css';

export default class HeroImage extends React.Component {
  onError = (e) => {
    e.target.src = "//www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg";
  }

  render() {
    const { details } =  this.props;
    const genres = details.genres ? details.genres.reduce((acc, genre) => acc + ", " + genre.name, '') : '';
    const duration = timeConvert(details.runtime)

    return (
      <div className="hero-image-wrapper">
        <img className="hero-image" loading="lazy" onError={this.onError} src={`${AppConfig.Poster780BaseURL}${details.poster_path}`} alt={details.title} />
        <div className="shadow"></div>
        <div className="details-wrapper">
          <span className="movie-name">{details.title}</span>
          <div className="details">{details.release_date} {details.original_language ? `(${details.original_language.toUpperCase()})` : ""} | {genres} | {duration}</div>
        </div>
        <div className="user-score">{convertRatingToPercentage(details.vote_average)}</div>
      </div>
    );
  }
}