import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import LoginFormModal from '../LoginFormModal';
import SignUpFormModal from '../SignupFormModal';
import DemoUser from '../DemoUser';

function Navigation({ isLoaded }){
    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;

    if (sessionUser) {
    sessionLinks = (
        <ProfileButton user={sessionUser} />
    );
    } else {
    sessionLinks = (
        <div className='loginAndSignUpModal'>
        <LoginFormModal />
        <SignUpFormModal />
        <DemoUser />
        </div>
    );
}

return (
    <nav className='navBar'>
        <div className='leftContainer'>
            <img alt='Logo' id="bnbCalifornia"></img>
        </div>
        <div className='rightContainer'>
            <ul>
                <li>
                <NavLink className="navLinks" exact to="/">Home</NavLink>
                {isLoaded && sessionLinks}
                </li>
            </ul>
        </div>
    </nav>
    );
}

export default Navigation;
