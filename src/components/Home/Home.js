import React from 'react';
import './Home.css';
import TMDBCommunication from '../../communications/tmdb_communication';
import HeroSearch from '../HeroSearch/HeroSearch';
import GenreList from '../GenreList/GenreList';
import Lists from '../Lists/Lists';
import { withRouter } from "react-router";


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.tmdbCommunication = new TMDBCommunication();
    this.state = {
      genreId: -1,
      searchKey: '',
    };
  }

  useQuery = () => {
    const { location } = this.props;
    return new URLSearchParams(location.search);
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
    const query = this.useQuery();
    const category = query.get('category') || '';

    return (
      <React.Fragment>
        <HeroSearch onSearchEvent={this.onSearchEvent} />
        {searchKey ? 
          <div className="search-text">Showing results for <b>‘{searchKey}’</b></div> 
          : 
          <GenreList selectedCategory={category} onGenreSelected={this.onGenreSelected} />
        }
        {genreId !== -1 || searchKey !== "" ? <Lists 
          loading={true} 
          key={listsKey} 
          searchKey={searchKey} 
          genreId={genreId}  
        /> : null }
        
      </React.Fragment>
    );
  }
}

export default withRouter(Home); 
