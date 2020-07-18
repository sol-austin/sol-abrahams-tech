import React from 'react';
import './HomepageBody.css';
import {Link} from 'react-router-dom'

const HomepageBody = () => {
  return (
    <div className='homepage-body'>
      <div className="homepage-col-1 homepage-col">
        <div id="homepage-card-education" className="homepage-card">
          <div className='homepage-card-vertical-middle'>
            <Link to='/education'><h1 className="homepage-card-title">Education</h1></Link>
            <p>The Latymer School</p>
          </div>
        </div>
        <div id="homepage-card-experience" className="homepage-card">
          <div className='homepage-card-vertical-middle'>
            <h1 className="homepage-card-title">Experience</h1>
            <p>Forensic Architecture, Rookie Cooks, Catherine Powell</p>
          </div>
        </div>
      </div>
      <div id="homepage-card-achievements" className="homepage-col-2 homepage-col">
        <div className="homepage-card">
          <div className='homepage-card-vertical-middle'>
            <h1 className="homepage-card-title">Achievements</h1>
            <p>CyberStart Elite, DofE, DataCamp, SANS SEC560</p>
          </div>
        </div>
        <div id="homepage-card-other" className="homepage-card">
          <div className='homepage-card-vertical-middle'>
            <h1 className="homepage-card-title">Other</h1>
            <p>Other</p>
          </div>
        </div>
      </div>
    </div>
  )
} 

export default HomepageBody;
