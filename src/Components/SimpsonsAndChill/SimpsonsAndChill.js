import React, { Component } from 'react'
import './SimpsonsAndChill.css'
import { mockSimpsonsBackend } from '../mockSimpsonsBackend'

export default class SimpsonsAndChill extends Component {
  constructor () {
    super()
    mockSimpsonsBackend.init()
  }
  render () {
    return (
      <div className='simpsons-and-chill'>
      SIMPSONS AND CHILL!!
      </div>
    )
  }
}
