import React, { Component } from 'react';
import { mockSimpsonsBackend } from '../../mockSimpsonsBackend'
import './Watchlist.css';
import EpWatch from './EpWatch/EpWatch';

export default class Watchlist extends Component {
  constructor(){
    super();
    this.componentDidMount = this.componentDidMount.bind(this);
    this.renderWatchlist = this.renderWatchlist.bind(this);
    this.state = {watchList: []};
  }

  componentDidMount(){
    mockSimpsonsBackend.getWatchList()
    .then((data)=>{
      this.setState({watchList: data.episode_ids})
    })
  }

  renderWatchlist(){
    let watchList = this.state.watchList;
    return this.props.episodes.map((episode)=>{
      if(watchList.indexOf(episode.id)!== -1){
        return <EpWatch title={episode.title}/>;
      } else {
        return false;
      }
    })
  }

  render(){
    return(
      <div className="watchlist">
      {this.props.episodes && this.state.watchList
        ? this.renderWatchlist()
        : null
      }
      </div>
    );
  }
}
