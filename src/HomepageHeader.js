import React from 'react'
import './HomepageHeader.css'
import Scroll from 'react-scroll'

const HomepageHeader = () => {
  return (
    <div className='outer-homepage-header-container'>
      <div className='linkedin-container'>
        <a href='https://www.linkedin.com/in/sol-abrahams/'>
          <img alt='linkedin-logo' src='logos/linkedin.png' width={50} />
        </a>
      </div>
      <div className='title-text-container' style={{ zIndex: 999, color: 'white' }}>
        <h1 style={{ fontWeight: 'normal' }}>Hello, I'm <span>Sol Abrahams.</span></h1>
        <hr />
        <h3 style={{ fontWeight: 'normal' }}>I'm a student with a passion for<br />programming and problem solving.</h3>
        <a href='#homepage-body' onClick={() => Scroll.animateScroll.scrollTo(window.innerHeight)}>
          <button className='find-out-more'>
            <p style={{ display: 'inline-block', margin: 'auto', fontSize: 20 }}>Find out more</p>
            <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='feather feather-arrow-right rotate-arrow'>
              <line x1='5' y1='12' x2='19' y2='12' />
              <polyline points='12 5 19 12 12 19' />
            </svg>
          </button>
        </a>
      </div>
    </div>
  )
}

export default HomepageHeader
