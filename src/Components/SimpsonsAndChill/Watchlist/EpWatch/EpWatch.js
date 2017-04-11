import React, { Component } from 'react';
import { mockSimpsonsBackend } from '../../../mockSimpsonsBackend';
import './EpWatch.css';

export default class EpWatch extends Component {
  constructor() {
    super();
    this.removeFromBackendWatchList = this.removeFromBackendWatchList.bind(this);
  }

  removeFromBackendWatchList(id) {
    mockSimpsonsBackend.removeFromWatchList(id)
    .then((response) => {
      
    });
  }

  render(){
    return(
      <div className="ep-watch">
        {this.props.title}
        <div className="remove-ep-btn" onClick={()=>{
          this.removeFromBackendWatchList(this.props.id)
        }}>
        REMOVE EPISODE
        </div>
      </div>
    );
  }
}
