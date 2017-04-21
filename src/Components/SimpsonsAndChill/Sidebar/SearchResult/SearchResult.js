import React, { Component } from 'react';
import './SearchResult.css';

export default class SearchResult extends Component {
  render(){
    return (
      <div className="search-result">
        <h4 className="title">{this.props.title}</h4>
        <h5 className="season">Season: {this.props.season}</h5>
        <h5 className="airdate">Airdate: {this.props.airdate}</h5>
        <h5 className="synopsis-tag">Synopsis:</h5><p className="synopsis-summary">
        {this.props.description}</p>
        <div className="add-to-watchlist-btn" onClick={()=>{
          this.props.addToWatchListFunc(this.props.id)
        }}>
          ADD TO WATCHLIST
        </div>
      </div>
    );
  }
}
