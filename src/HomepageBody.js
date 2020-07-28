import React from 'react'
import './HomepageBody.css'
import { Link } from 'react-router-dom'

const HomepageBody = () => {
  return (
    <div className='homepage-body'>
      <div className='homepage-col-1 homepage-col'>
        <Link to='/education'>
          <div id='homepage-card-education-achievements' className='homepage-card'>
            <div className='homepage-card-vertical-middle'>
              <h1 className='homepage-card-title'>Education & Achievements</h1>
              <p>CyberStart Elite, DofE, DataCamp, SANS SEC560</p>
            </div>
          </div>
        </Link>
      </div>
      <div className='homepage-col-2 homepage-col'>
        <div id='homepage-card-experience' className='homepage-card'>
          <div className='homepage-card-vertical-middle'>
            <h1 className='homepage-card-title'>Work Experience</h1>
            <p>Forensic Architecture, Rookie Cooks, Catherine Powell</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomepageBody
