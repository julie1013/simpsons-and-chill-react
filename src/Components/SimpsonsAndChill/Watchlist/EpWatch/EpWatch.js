import React, { Component } from 'react';
import './EpWatch.css';

export default class EpWatch extends Component {


  render(){
    return(
      <div className="ep-watch">
        {this.props.title}
        <div className="remove-ep-btn" onClick={()=>{
          this.props.removeFromWatchListFunc(this.props.id)
        }}>
        REMOVE EPISODE
        </div>
      </div>
    );
  }
}
