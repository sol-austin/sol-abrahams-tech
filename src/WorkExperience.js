import React from 'react'
import './WorkExperience.css'
import CardSquare from './CardSquare.js'
import copy from './common/copy.js'

const WorkExperience = () => {
  return (
    <div>
      <div className='work-experience-container'>
        <div className='inner-work-experience-container'>
          <h1>WORK EXPERIENCE</h1>
          {copy.workexperience.cards.map(card => (
            <CardSquare card={card} key={card.title} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default WorkExperience
