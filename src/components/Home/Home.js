import React from 'react';
import './Home.css';
import TMDBCommunication from '../../communications/tmdb_communication';
import HeroSearch from '../HeroSearch/HeroSearch';
import GenreList from '../GenreList/GenreList';
import Lists from '../Lists/Lists';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.tmdbCommunication = new TMDBCommunication();
    this.state = {
      genreId: -1,
      searchKey: '',
    };
  }

  onGenreSelected = (genreId) => {
    this.setState({
      genreId,
    })
  }

  onSearchEvent = (searchKey) => {
    this.setState({
      searchKey: searchKey,
    })
  }

  render() {
    const { genreId, searchKey } = this.state;
    const listsKey = searchKey || genreId;
    return (
      <React.Fragment>
        <HeroSearch onSearchEvent={this.onSearchEvent} />
        {searchKey ? 
          <div className="search-text">Showing results for <b> ‘{searchKey}’</b></div> 
          : 
          <GenreList onGenreSelected={this.onGenreSelected} />
        }
        {(genreId && genreId > -1) ? (<Lists 
          loading={true} 
          key={listsKey} 
          searchKey={searchKey} 
          genreId={genreId}  
          />)  : null}
      </React.Fragment>
    );
  }
}

export default Home;
