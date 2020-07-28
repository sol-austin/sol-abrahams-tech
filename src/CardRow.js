import React from 'react'

const CardRow = (props) => {
  return (
    <li className='the-latymer-school'>
      <div className='the-latymer-school'>
        <div className='card-left-header card-section'>
          <h2>{props.card.title}</h2>
          <h5>{props.card.dates}</h5>
        </div>
        <div className='card-right-description card-section'>
          <p>{props.card.description}</p>
        </div>
        <div className='card-right-school-grades'>
          {props.card.alevels &&
          <div className='card-right-alevel-grades card-section'>
            <h4 style={{ margin: 0 }}>A Levels</h4>
            <ul className='a-level-grades'>
              <li>Chemistry</li>
              <li>Further Maths</li>
              <li>Maths</li>
              <li>Physics</li>
            </ul>
          </div>
          }
          {props.card.gcses &&
          <div className='card-right-gcse-grades card-section'>
            <h4 style={{ margin: 0 }}>GCSEs</h4>
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
          }
        </div>
      </div>
    </li>
  )
}

export default CardRow
