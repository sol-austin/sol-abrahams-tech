import React from 'react'

const CardSquare = (props) => {
  return (
    <div className='square-card-container'>
      <div className='inner-square-card'>
        <div className='logo-title-container'>
          {props.card.logos.map(logo => (
            <img key={logo} alt='logo' src={require('../public/logos/' + logo)} height={50} width={50} />
          ))}
          <h2>{props.card.title}</h2>
        </div>
        <h4 className='square-dates'>{props.card.dates}</h4>
        <p>{props.card.list.list_title}</p>
        <ul>
          {props.card.list.list_items.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default CardSquare
