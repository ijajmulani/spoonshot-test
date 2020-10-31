import React from 'react';
import TMDBCommunication from '../../communications/tmdb_communication';
import './GenreList.css'

export default class GenreList extends React.Component {
  constructor(props) {
    super(props);
    this.tmdbCommunication = new TMDBCommunication();
    this.state = {
      genres: [],
      selectedGenreID: props.selectedGenreID || -1,
    };
  }

  componentDidMount() {
    this.tmdbCommunication.getGenres().then(res => {
      if (res.genres) {
        this.setState({
          genres: res.genres,
          selectedGenreID: res.genres[0].id,
        }, () => {
          if (this.props.onGenreSelected) {
            this.props.onGenreSelected(res.genres[0].id);
          }
        })
      }
    })
  }

  onGenreClick = (e, genreId) => {
    this.setState({
      selectedGenreID: genreId
    }, () => {
      if (this.props.onGenreSelected) {
        this.props.onGenreSelected(genreId);
      }
    });
  }

  render() {
    const { genres, selectedGenreID } = this.state;
    return (
      <div className="category-list-wrapper">
        <h2 className="browse-category-text">Browse movies by category</h2>
        <ul className="category-list">
          {genres.map((genre) => (
            <li onClick={(e) => this.onGenreClick(e, genre.id)} key={genre.id} className={selectedGenreID === genre.id ? 'selected' : null}>{genre.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}