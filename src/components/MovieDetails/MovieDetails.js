import React from 'react';

import TMDBCommunication from '../../communications/tmdb_communication';
import Cast from '../Cast/Cast';
import HeroImage from '../HeroImage/HeroImage';
import Keywords from '../Keywords/Keywords';
import Media from '../Media/Media';
import Overview from '../Overview/Overview';
import Recommendations from '../Recommendations/Recommendations';
import './MovieDetails.css';
import { withRouter } from "react-router";

class MovieDetails extends React.Component {
  constructor(props) {
    super(props);
    this.tmdbCommunication = new TMDBCommunication();
    this.state = {
      details : {},
    };
  }

  componentDidMount() {
    const { movieId } = this.props.match.params;
    this.tmdbCommunication.getMovieDetails(movieId).then(res => {
      this.setState({
        details: res,
        movieId,
      })
    });
  }

  render() {
    const { details } =  this.state;
    const { movieId } = this.props.match.params;
   
    return (
      <React.Fragment>
        <HeroImage details={details} />
        <Overview  details={details}/>
        <hr></hr>
        <Cast movieId={movieId} />
        <div className="media-keyword-wrapper">
          <Media details={details} movieId={movieId} />
          <Keywords movieId={movieId} />
        </div>
        <Recommendations movieId={movieId} />
      </React.Fragment>
    );
  }
}
export default withRouter(MovieDetails); 