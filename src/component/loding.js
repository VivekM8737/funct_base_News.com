import React from 'react'
import Rocket from './Rocket.gif'

const loding = () => {

  return (
    <div className='text-center'>
      <img src={Rocket} alt='loading'></img>
      <p>Loading...</p>
    </div>
  )
}


export default loding