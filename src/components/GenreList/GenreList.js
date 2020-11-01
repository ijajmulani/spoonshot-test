import React from 'react';
import { Link } from 'react-router-dom';
import TMDBCommunication from '../../communications/tmdb_communication';
import './GenreList.css'

export default class GenreList extends React.Component {
  constructor(props) {
    super(props);
    this.tmdbCommunication = new TMDBCommunication();
    this.state = {
      genres: [],
      selectedGenreID: -1,
    };
  }

  componentDidMount() {
    this.tmdbCommunication.getGenres().then(res => {
      if (res.genres) {
        let selectedGenreID = -1
        if (this.props.selectedCategory !== "") {
          res.genres.forEach(genre => {
            if (genre.name.toLowerCase() === this.props.selectedCategory) {
              selectedGenreID = genre.id;
            }
          });
        }
        selectedGenreID = selectedGenreID === -1 ?  res.genres[0].id : selectedGenreID
        this.setState({
          genres: res.genres,
          selectedGenreID,
        }, () => {
          if (this.props.onGenreSelected) {
            this.props.onGenreSelected(selectedGenreID);
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
            <Link key={genre.id} to={location => `${location.pathname}?category=${genre.name.toLowerCase()}`} >
              <li onClick={(e) => this.onGenreClick(e, genre.id)}  className={selectedGenreID === genre.id ? 'selected' : null}>{genre.name}</li>
            </Link>
          ))}
        </ul>
      </div>
    );
  }
}