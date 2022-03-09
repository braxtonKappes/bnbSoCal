import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import LoginFormModal from '../LoginFormModal';
import SignUpFormModal from '../SignupFormModal';
import DemoUser from '../DemoUser';
import Logo2 from './Logo2.png'
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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
        <img alt='Logo' className='bnbLogo' src={ Logo2 }></img>
        <div className='middleContainer'>
            <input type='text' />
            <SearchIcon />
        </div>
        <div className='rightContainer'>
            <p>Become a Host</p>
            <ExpandMoreIcon />
            <NavLink className="navLinks" exact to="/">Home</NavLink>
            {isLoaded && sessionLinks}
        </div>
    </nav>
    );
}

export default Navigation;
