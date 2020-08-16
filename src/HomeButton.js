import React from 'react'
import './HomeButton.css'
import { Link } from 'react-router-dom'

const HomeButton = () => {
    return (
        <Link to='/'><i className='material-icons home-button'>home</i></Link>
    )
}

export default HomeButton
