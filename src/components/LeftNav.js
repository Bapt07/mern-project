import React from 'react'
import { Link } from 'react-router-dom'

export default function LeftNav() {
  return (
    <div className='left-nav-container'>
        <div className='icons'>
            <div className='icons-bis'>
                <Link to="/">
                    <img src='./img/icons/home.svg' alt='home'/>
                </Link>
                <br/>
                <Link to="/trending">
                    <img src='./img/icons/rocket.svg' alt='home'/>
                </Link>
                <br/>
                <Link to="/profil">
                    <img src='./img/icons/user.svg' alt='home'/>
                </Link>
            </div>
        </div>
    </div>
  )
}
