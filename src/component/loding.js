import React, { Component } from 'react'
import Rocket from './Rocket.gif'

export class loding extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={Rocket} alt='loading'></img>
        <p>Loading...</p>
      </div>
    )
  }
}

export default loding