import React from 'react'
import './WorkExperience.css'
import CardSquare from './CardSquare.js'
import copy from './common/copy.js'
import HomeButton from './HomeButton'

const WorkExperience = () => {
  return (
    <div>
      <HomeButton />
      <div className='work-experience-container'>
        <div className='inner-work-experience-container'>
          <h1>WORK EXPERIENCE</h1>
          <div className='outer-square-cards-container'>
            {copy.work_experience.cards.map(card => (
              <CardSquare card={card} key={card.title} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkExperience
