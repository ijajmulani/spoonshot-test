import React from 'react';
import TMDBCommunication from '../../communications/tmdb_communication';
import './Keywords.css';

export default class Keywords extends React.Component {
  constructor(props) {
    super(props);
    this.tmdbCommunication = new TMDBCommunication();
    this.state = {
      keywords: [],
    }
  }

  componentDidMount() {
    this.tmdbCommunication.getKeywords(this.props.movieId).then(res => {
      this.setState({
        keywords: res.keywords,
      })
    });
  }

  render() {
    const { keywords } = this.state;

    return (
      <div className="keywords-wrapper">
        <h2 className="keywords-heading">Keywords</h2>
          {keywords && keywords.length ? (
            <ul>
              {keywords.map((keyword) => (
                <li key={keyword.id} ><a className="keyword" href={`/keyword/${keyword.id}`}>{keyword.name}</a></li>
              ))}
            </ul>
          ) : <div>No keywords found</div>}
      </div>
    ) 
  }
}