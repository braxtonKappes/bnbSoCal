import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import LoginFormModal from '../LoginFormModal';
import SignUpFormModal from '../SignupFormModal';
import DemoUser from '../DemoUser';
import Logo2 from './Logo2.png'

function Navigation({ isLoaded }){
    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;

    if (sessionUser) {
    sessionLinks = (
        <ProfileButton user={sessionUser} />
    );
    } else {
    sessionLinks = (
        <div className='sessionLinks'>
        <LoginFormModal />
        <SignUpFormModal />
        <DemoUser />
        </div>
    );
}

return (
    <nav className='navBar'>
        <NavLink exact to='/' className='logoClickHome'><img alt='Logo' className='bnbLogo' src={ Logo2 }></img></NavLink>
        <div className='rightContainer'>
            <p>Become a Host</p>
            {isLoaded && sessionLinks}
        </div>
    </nav>
    );
}

export default Navigation;
