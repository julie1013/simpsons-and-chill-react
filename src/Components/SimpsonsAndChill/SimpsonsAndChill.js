import React, { Component } from 'react'
import './SimpsonsAndChill.css'
import { mockSimpsonsBackend } from '../mockSimpsonsBackend'

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
      return response;
    }).then((response)=>{
      this.setState({episodes: response[2].title})
    })
  }

  render () {
    return (
      <div className='simpsons-and-chill'>
        {this.state.episodes
        ? <h1>{this.state.episodes}</h1>
        : null }
      </div>
    )
  }
}
