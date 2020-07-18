import React from 'react';
import './HomepageBody.css';

const HomepageBody = () => {
  return (
    <div className='homepage-body'>
      <div className="homepage-col-1 homepage-col">
        <div id="homepage-card-education" className="homepage-card">
          <div className='homepage-card-vertical-middle'>
          <h3 className="homepage-card-title">Education</h3>
          </div>
        </div>
        <div id="homepage-card-experience" className="homepage-card">
          <div className='homepage-card-vertical-middle'>
          <h3 className="homepage-card-title">Experience</h3>
          </div>
        </div>
      </div>
      <div id="homepage-card-achievements" className="homepage-col-2 homepage-col">
        <div className="homepage-card">
          <div className='homepage-card-vertical-middle'>
          <h3 className="homepage-card-title">Achievements</h3>
          </div>
        </div>
        <div id="homepage-card-other" className="homepage-card">
          <div className='homepage-card-vertical-middle'>
          <h3 className="homepage-card-title">Other</h3>
          </div>
        </div>
      </div>
    </div>
  )
} 

export default HomepageBody;
