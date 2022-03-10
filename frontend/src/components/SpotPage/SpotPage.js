import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
import { getOneSpot } from '../../store/spots'
import { useParams } from 'react-router-dom';
import './SpotPage.css'



function SpotPage() {
    const dispatch = useDispatch();
    const spot = useSelector(state => state.spots);
    const{ spotId } = useParams();

    useEffect(() => {
            dispatch(getOneSpot(spotId))
        }, [dispatch]);

    return (
    <div>Now showing post {spotId}
        {spot.map}
        <div className='mainBody'>
        </div>
    </div>
    )
}

export default SpotPage
