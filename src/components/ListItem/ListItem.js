import React from 'react';
import { AppConfig } from '../../common/config';
import './ListItem.css';


export default class ListItem extends React.Component {
  onError = (e) => {
    e.target.src = "//www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg";
  }

  render() {
    const {title, release_date, poster_path, id} = this.props.data;
    return (
      <a onClick={(e) => this.props.onMovieClick(e, id)} href={`movie/${id}`} className="card">
        <div className="thumb">
          <img className="poster" loading="lazy" onError={this.onError} src={`${AppConfig.Poster342BaseURL}${poster_path}`} alt={title} />
        </div>
        <div className="detail-box">
          <span className="title">{title}</span> 
          <span className="release-date">{release_date}</span> 
        </div>
      </a>
    );
  }
}