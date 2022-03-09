import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import './ErrorPage.css'

function ErrorPage() {
    return (
    <div className='ErrorPage'>
        <h1>Page Not Found</h1>
        <NavLink className="returnHome" exact to="/">Return Home</NavLink>
    </div>
    )
}

export default ErrorPage
