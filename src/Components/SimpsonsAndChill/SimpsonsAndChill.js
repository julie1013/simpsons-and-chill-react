import React, { Component } from 'react'
import './SimpsonsAndChill.css'
import { mockSimpsonsBackend } from '../mockSimpsonsBackend'
import Sidebar from './Sidebar/Sidebar';
import Watchlist from './Watchlist/Watchlist';

export default class SimpsonsAndChill extends Component {
  constructor () {
    super()
    mockSimpsonsBackend.init()
    this.state={
      episodes: [],
      watchList: []
    }
    this.componentDidMount = this.componentDidMount.bind(this);
    this.addToWatchList = this.addToWatchList.bind(this);
  }

  componentDidMount(){
    mockSimpsonsBackend.getEpisodes()
    .then((response)=>{
      this.setState({episodes: response})
    })
    mockSimpsonsBackend.getWatchList()
    .then((response)=>{
      this.setState({watchList: response.episode_ids})
    })
  }

  addToWatchList(id){
    mockSimpsonsBackend.addToWatchList(id)
    .then(()=>{
      this.setState({
        watchList: this.state.watchList.concat([id])
      })
    })
  }

  render () {
    return (
      <div className='simpsons-and-chill'>
      <Sidebar addToWatchListFunc={this.addToWatchList}/>
      <Watchlist episodes={this.state.episodes}
                 watchList={this.state.watchList}
      />
      </div>
    )
  }
}
