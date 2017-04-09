import React, { Component } from 'react'
import './SimpsonsAndChill.css'
import { mockSimpsonsBackend } from '../mockSimpsonsBackend'
import Sidebar from './Sidebar/Sidebar';
import Watchlist from './Watchlist/Watchlist';

export default class SimpsonsAndChill extends Component {
  constructor () {
    super()
    mockSimpsonsBackend.init()
    this.state={episodes: undefined}
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount(){
    mockSimpsonsBackend.getEpisodes()
    .then((response)=>{
      this.setState({episodes: response})
    })
  }

  render () {
    return (
      <div className='simpsons-and-chill'>
      <Sidebar />
      <Watchlist episodes={this.state.episodes}/>
      </div>
    )
  }
}
