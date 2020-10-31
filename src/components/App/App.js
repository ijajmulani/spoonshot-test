import React from 'react';
import './App.css';
import Header from '../Header/Header';
// import List from '../Lists/Lists';
import TMDBCommunication from '../../communications/tmdb_communication';
import HeroSearch from '../HeroSearch/HeroSearch';
import CategoryList from '../CategoryList/CategoryList';

class App extends React.Component {
  animeCommunication;
  limit = 20;
  pageNumber = 1;

  constructor(props) {
    super(props);
    this.tmdbCommunication = new TMDBCommunication();
    const searchParams = new URLSearchParams(window.location.search);
    const query = searchParams.get("query");

    this.state = {
      results: [], 
      loading : false,
      isEnd: false,
      searchQuery: query ? query.trim() : '',
    };
  }

  componentDidMount() {
    // if (this.state.searchQuery) {
    //   this.onSearchEvent(this.state.searchQuery);
    // }
  }

  onSearchEvent = (query) => {
    this.pageNumber = 1;
    const searchQuery = query.trim();
    if (searchQuery.length < 3) {
      alert("Error: Requires atleast 3 or more characters");
      return
    }

    this.setState({
      loading: true,
      results: [],
      searchQuery: searchQuery,
    });
    this.fetchData(searchQuery);
  } 

  onLoadMoreEvent = () => {
    this.setState({
      loading: true,
    });
    this.pageNumber++;
    this.fetchData(this.state.searchQuery);
  }

  fetchData = (query) => {
    this.animeCommunication.getDataByQuery(query, this.pageNumber, this.limit).then((resp) => {
      const data = resp.results || [];
      this.setState((state) => ({
        results: state.results.concat(data),
        loading: false,
        isEnd: resp.last_page === this.pageNumber,
      }));
    }).catch(error => {
      this.setState({
        results: [],
        loading: false,
        isEnd: false,
      });
    });
  }

  render() {
    const {loading, results, isEnd, searchQuery}  = this.state;
    return (
      <div className="container">
        <HeroSearch />
        <CategoryList />
      </div>
    );
  }
}

export default App;
