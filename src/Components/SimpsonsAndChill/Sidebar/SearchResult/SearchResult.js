import React, { Component } from 'react';
import './SearchResult.css';

export default class SearchResult extends Component {
  render(){
    return (
      <div className="search-result">
        {this.props.title}
        {this.props.season}
        {this.props.airdate}
        {this.props.description}
        <div className="add-to-watchlist-btn" onClick={()=>{
          this.props.addToWatchListFunc(this.props.id)
        }}>
          ADD TO WATCHLIST
        </div>
      </div>
    );
  }
}
