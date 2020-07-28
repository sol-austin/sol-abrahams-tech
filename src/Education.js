import React from 'react'
import './Education.css'
import CardRow from './CardRow.js'
import copy from './common/copy.js'

const Education = () => {
  return (
    <div>
      <div className='education-page-container'>
        <div className='inner-education-container'>
          <h1>EDUCATION & ACHIEVEMENTS</h1>
          <ul className='education-achievement-events'>
            { copy.education.cards.map(card => (
              <CardRow card={card} key={card.title} />
            )) }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Education
