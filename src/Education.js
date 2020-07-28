import React from 'react';
import './Education.css';
import CardRow from './CardRow.js'

const Education = () => {
  return (
    <div>
      <div className='education-page-container'>
        <div className='inner-education-container'>
          <h1>EDUCATION & ACHIEVEMENTS</h1>
          <div className='school-info'>
          </div>
          <ul className='education-achievement-events'>
            <li className='the-latymer-school'>
              <div className='the-latymer-school'>
                <div className='card-left-header card-section'>
                  <h2>The Latymer School</h2>
                  <h5>2015-present</h5>
                </div>
                <div className='card-right-description card-section'>
                  <p>I completed my GCSEs at Latymer with top grades, and am currently studying A-Levels in the sixth form. I've been engaged in the school's wider community and was awarded Spirit of Latymer in Year 10.</p>
                </div>
                <div className='card-right-alevel-grades card-section'>
                  <h4 style={{margin: 0}}>A Levels</h4>
                  <ul className='a-level-grades'>
                    <li>Chemistry</li>
                    <li>Further Maths</li>
                    <li>Maths</li>
                    <li>Physics</li>
                  </ul>
                </div>
                <div className='card-right-gcse-grades card-section'>
                  <h4 style={{margin: 0}}>GCSEs</h4>
                  <div className='gcse-columns-container'>
                  <ul className='left-column-gcse-grades gcse-grades-column'>
                    <li>Biology<span className='grade-number'>9</span></li>
                    <li>Chemistry<span className='grade-number'>9</span></li>
                    <li>Design & Technology<span className='grade-number'>9</span></li>
                    <li>English Language<span className='grade-number'>9</span></li>
                    <li>English Literature<span className='grade-number'>9</span></li>
                  </ul>
                  <ul className='right-column-gcse-grades gcse-grades-column'>
                    <li>Geography<span className='grade-number'>9</span></li>
                    <li>German<span className='grade-number'>9</span></li>
                    <li>History<span className='grade-number'>9</span></li>
                    <li>Maths<span className='grade-number'>9</span></li>
                    <li>Physics<span className='grade-number'>9</span></li>
                  </ul>
                  </div>
                </div>
              </div>
            </li>
            <CardRow />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Education;
