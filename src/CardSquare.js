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
        <p>{props.card.description}</p>
      </div>
    </div>
  )
}

export default CardSquare
