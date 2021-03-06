import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { UidContext } from './AppContext';
import Logout from './Log/Logout';

export default function NavBar() {
    const uid = useContext(UidContext);
    const userData = useSelector((state) => state.userReducer);

  return (
    <nav>
        <div className="nav-container">
            <div className="logo">
                <Link to="/">
                    <div className='logo'>
                        <img src='./img/icon.png' alt="icon" />
                        <h1>Familly Network</h1>
                    </div>
                </Link>
            </div>
            {uid ? (
                <ul>
                    <li></li>
                    <li className='welcome'>
                        <Link to='/profil'>
                            <h5>Bienvenue {userData.pseudo}</h5>
                        </Link>
                    </li>
                    <Logout />
                </ul>
            ) : (
                <ul>
                    <li></li>
                    <li>
                        <Link to='/profil'>
                            <img src="./img/icons/login.svg" alt="login" />
                        </Link>
                    </li>
                </ul>
            )}
        </div>
    </nav>
  )
}
