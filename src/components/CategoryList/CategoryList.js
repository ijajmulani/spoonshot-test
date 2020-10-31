import React from 'react';
import './CategoryList.css'

export default class CategoryList extends React.Component {
  render() {
    return (
      <div className="category-list-wrapper">
        <h2 className="browse-category-text">Browse movies by category</h2>
        <ul className="category-list">
          <li className="selected">New Release</li>
          <li>Upcoming</li>
          <li>Action</li>
          <li>Comedy</li>
          <li>Crime</li>
          <li>Drama</li>
          <li>Thriller</li>
          <li>Sci-Fi</li>
          <li>Family</li>
          <li>Horror</li>
        </ul>
      </div>
    );
  }
}