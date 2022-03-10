import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='Home'>
        <div className='helpUkraineContainer'>
          <p>Help House 100,000 refugees fleeing Ukraine</p>
          <div className='Learn-More'>
            <a href='https://www.airbnb.org/help-ukraine?locale=en&_ga=2.208141330.1078567032.1646794085-1627440874.1646500097'>
              Learn more
            </a>
          </div>
        </div>
        <div className='imFlexibleContainer'>
          <p>Let your curiosity do the booking</p>
          <div className='imFlexible'>
            <Link to='/spots'>
              I'm flexible
            </Link>
          </div>
        </div>
    </div>
  )
}

export default Home
