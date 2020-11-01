import React from 'react';
import TMDBCommunication from '../../communications/tmdb_communication';
import ListItem from '../ListItem/ListItem';
import Loader from '../Loader/Loader';
import './Lists.css';


export default class Lists extends React.Component {
  constructor(props) {
    super(props);
    this.tmdbCommunication = new TMDBCommunication();
    this.state = {
      data: {},
      page: 1,
      loading: props.loading,
      searchKey: props.searchKey
    }
  }

  componentDidMount() {
    this.getList(this.state.page).then(res => {
      if (res && res.results) {
        this.setState({
          data: res,
          loading: false,
        });
      }
    })
  }


  getList = (page) => {
    this.setState({
      loading: true
    });
    if (this.state.searchKey) {
      return this.tmdbCommunication.searchMovie(this.state.searchKey, page);
    } else {
      return this.tmdbCommunication.getListByGenre(this.props.genreId, page);
    }
  }
  
  onLoadMoreClick = () => {
    this.getList(this.state.page + 1).then(res => {
      if (res && res.results) {
        this.setState(prevState => ({
          data: {                   
            ...prevState.data,   
            results: [...prevState.data.results, ...res.results]  
          },
          page: prevState.page + 1,
          loading: false,
        }))
      }
    })
  }


  render() {
    const {data, page, loading} = this.state;
    return (
      <React.Fragment>
        {data && data.results ? (
          <div>
            <div className='card-container'>
              {data.results.map((item) => (
                <ListItem key={item.id} data={item} />
              ))}
            </div>
            {(data.total_pages === 0 || data.total_pages === page || loading) ? null : <button className="load-more-btn" onClick={this.onLoadMoreClick}>Load More</button>}
          </div>
        )  : null}
        {loading ? <Loader /> : null}
      </React.Fragment>
    );
  }
}