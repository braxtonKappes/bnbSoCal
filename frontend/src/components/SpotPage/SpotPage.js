import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getOneSpot } from '../../store/spots'
import './SpotPage.css'



function SpotPage() {
    const dispatch = useDispatch();
    const spot = useSelector(state => console.log(state));

    useEffect(() => {
            dispatch(getOneSpot())
        }, [dispatch]);

    return (
    <div className='SpotPage'>
            
    </div>
    )
}

export default SpotPage
