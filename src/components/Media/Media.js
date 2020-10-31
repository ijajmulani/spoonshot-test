import React from 'react';
import { AppConfig } from '../../common/config';
import './Media.css';

export default class Media extends React.Component {
  onError = (e) => {
    e.target.src = "//www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg";
  }

  render() {
    return (
      <div className="media-wrapper">
        <h3 className="media-heading">Media</h3>
        <ul className="media-panel-wrapper">
          <li className="media-panel active"><a href="#">Most Popular</a></li>
          <li className="media-panel"><a href="#">Videos</a></li>
          <li className="media-panel"><a href="#">Backdrops</a></li>
          <li className="media-panel"><a href="#">Poster</a></li>
        </ul>
        <img onError={this.onError} className="media-image" src={`${AppConfig.Poster780BaseURL}${this.props.details.poster_path}`} alt={this.props.details.title} />
      </div>
    )
  }
}