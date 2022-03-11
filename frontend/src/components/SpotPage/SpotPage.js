import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
import { getOneSpot } from '../../store/spots'
import { useParams } from 'react-router-dom';
import './SpotPage.css'



function SpotPage() {
    const dispatch = useDispatch();
    const spot = useSelector(state => state.spots.oneSpot);
    const { spotId } = useParams();
    const [isLoaded, setIsLoaded] = useState(false);
    // console.log("spotId is,", `${spotId}.`);
    // console.log("spot info is here,", spot);

    useEffect(() => {
        const loaded = async () => {
            await dispatch(getOneSpot(spotId));
            setIsLoaded(true);
            }
            loaded();
        }, [dispatch, spotId]);

    return (
        isLoaded && (
            <div className='mainBody'>
                <div className='topSection'>
                    <div className='spotNameContainer'>
                        <h1 className='spotName'>{spot.name}</h1>
                    </div>
                    <div className='cityStateCountryContainer'>
                        <div><i className="fa-solid fa-star-sharp"></i></div>
                        <span>{spot.city}, {spot.state}, {spot.country}</span>
                    </div>
                </div>
                <div className='middleSection'>
                    <div className='spotImgsContainer'>
                        <img alt='spotImg' className='spotPageImg' src={spot.Images[0].url}></img>
                    </div>
                </div>
                <div className='bottomSection'>
                    <div className='spotPageInfo'>
                    </div>
                </div>
                <div className='reviewSection'>
                </div>
            </div>
        )
    )
}

export default SpotPage
