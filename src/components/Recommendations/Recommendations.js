import React from 'react';
import { AppConfig } from '../../common/config';
import { convertRatingToPercentage } from '../../common/utility';
import TMDBCommunication from '../../communications/tmdb_communication';
import './Recommendations.css';

export default class Recommendations extends React.Component {
  constructor(props) {
    super(props);
    this.tmdbCommunication = new TMDBCommunication();
    this.state = {
      recommendations: [],
    }
  }

  componentDidMount() {
    this.tmdbCommunication.getRecommendations(this.props.movieId).then(res => {
      this.setState({
        recommendations: res.results,
      })
    });
  }

  render() {
    const { recommendations } = this.state;

    return (
        <div className="recommendations-wrapper">
          <h2 className="recommendations-heading">Recommendations</h2>
          {recommendations && recommendations.length ? (
            <ul>
              {recommendations.slice(0, 3).map((recommendation) => (
                <li className="recommendation-card" key={recommendation.id}>
                  <a  href={`/recommendations/${recommendation.id}`}>
                    <img className="recommendation-img" src={`${AppConfig.Poster342BaseURL}${recommendation.poster_path}`} alt={recommendation.title} />
                    <span className="recommendation-title">{recommendation.title}</span>
                    <span className="recommendation-percentage">{convertRatingToPercentage(recommendation.vote_average)}</span>
                  </a>
                </li>
              ))}
            </ul>
          ) : <div>No recommendations found</div>}
        </div>
    ) 
  }
}