import React from 'react'
import './Education.css'
import CardRow from './CardRow.js'
import copy from './common/copy.js'
import HomeButton from './HomeButton'

const Education = () => {
  return (
    <div>
      <HomeButton />
      <div className='education-page-container'>
        <div className='inner-education-container'>
          <h1>EDUCATION & ACHIEVEMENTS</h1>
          <ul className='education-achievement-events'>
            <li className='the-latymer-school'>
              <div className='the-latymer-school'>
                <div className='internal-card'>
                  <h3>UKMT Junior Mathematics Challenge - Silver</h3>
                </div>
                <div className='internal-card'>
                  <h3>UKMT Junior Mathematics Challenge - Gold</h3>
                </div>
                <div className='internal-card'>
                  <h3>UKMT Junior Mathematics Challenge - Kangaroo</h3>
                </div>
                <div className='internal-card'>
                  <h3>UKMT Intermediate Mathematics Challenge - Gold</h3>
                </div>
              </div>
            </li>
            {copy.education.cards.map(card => (
              <CardRow card={card} key={card.title} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Education
