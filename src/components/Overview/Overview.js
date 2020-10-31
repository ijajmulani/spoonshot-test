import React from 'react';
import { formatCurrency, getLanguageFromCode } from '../../common/utility';
import './Overview.css';

export default class Overview extends React.Component {
  render() {
    const {details} = this.props;
    return (
      <div className="overview-wrapper">
        <div className="left">
          <div className="overview-text">Overview</div>
          <div className="description">{details.overview}</div>
          <div className="director-details-wrapper">
          <div className="director-wrapper">
              <div className="heading">Anthony Russo</div>
              <div className="value">Director</div>
            </div>
            <div className="director-wrapper">
              <div className="heading">Joe Russo</div>
              <div className="value">Director</div>
            </div>
            <div className="director-wrapper">
              <div className="heading">Stephen McFeely</div>
              <div className="value">Screenplay</div>
            </div>
            <div className="director-wrapper">
              <div className="heading">Christopher Markus</div>
              <div className="value">Screenplay</div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="heading">Status</div>
          <div className="value">{details.status}</div>
          <div className="heading">Original Language</div>
          <div className="value">{getLanguageFromCode(details.original_language)}</div>
          <div className="heading">Budget</div>
          <div className="value">{formatCurrency(details.budget)}</div>
          <div className="heading">Revenue</div>
          <div className="value">{formatCurrency(details.revenue)}</div>
        </div>
      </div>
    );
  }
}