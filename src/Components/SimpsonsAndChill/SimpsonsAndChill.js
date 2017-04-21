import React, { Component } from 'react';
import './SimpsonsAndChill.css';
import { mockSimpsonsBackend } from '../mockSimpsonsBackend';
import Sidebar from './Sidebar/Sidebar';
import Watchlist from './Watchlist/Watchlist';

export default class SimpsonsAndChill extends Component {
  constructor () {
    super()
    mockSimpsonsBackend.init()
    this.state={
      episodes: [],
      watchList: [],
      addError: undefined
    }
    this.componentDidMount = this.componentDidMount.bind(this);
    this.addToWatchList = this.addToWatchList.bind(this);
    this.removeFromWatchList = this.removeFromWatchList.bind(this);
    this.onAddError = this.onAddError.bind(this);
    this.closeError = this.closeError.bind(this);
  }

  componentDidMount(){
    mockSimpsonsBackend.getEpisodes()
    .then((response)=>{
      this.setState({episodes: response})
    })
    mockSimpsonsBackend.getWatchList()
    .then((response)=>{
      this.setState({
        watchList: response.episode_ids,
        addError: undefined
      })
    })
  }

  onAddError(){
    if(this.state.addError === true){
      return(
        <div className="error-window slideDown">
          <div className="message-background">
            YOU HAVE ALREADY ADDED THAT, YOU TOOL!
            <div className="close-btn" onClick={()=>{
              this.closeError();
            }}>
              X
            </div>
          </div>
        </div>
      );
    }
  }

  closeError(){
    this.setState({
      addError: !this.state.addError
    })
  }

  addToWatchList(id){
    if((this.state.watchList).includes(id)){
      this.setState({
        addError: true
      })
    } else {
      mockSimpsonsBackend.addToWatchList(id);
      this.setState({
        watchList: this.state.watchList.concat([id]),
        addError: false
      })
    }
  }

  removeFromWatchList(id) {
    mockSimpsonsBackend.removeFromWatchList(id)
    .then((response) => {
      let indexToRemove = this.state.watchList.indexOf(id)
      this.setState({
        watchList: this.state.watchList.filter((_, i) => i !== indexToRemove)
      })
    });
  }

  render () {
    return (
      <div className='simpsons-and-chill'>
      <Sidebar addToWatchListFunc={this.addToWatchList}
                onAddErrorFunc={this.onAddError}
      />
      <Watchlist removeFromWatchListFunc={this.removeFromWatchList}
                 episodes={this.state.episodes}
                 watchList={this.state.watchList} />
      </div>
    )
  }
}
