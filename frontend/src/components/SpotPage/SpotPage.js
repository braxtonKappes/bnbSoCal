import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOneSpot } from '../../store/spots'
import { useParams } from 'react-router-dom';
import './SpotPage.css'
import DeleteConfirmationModal from '../DeleteConfirmationModal/index'
import EditModal from '../EditModal/index'

function SpotPage() {
    const dispatch = useDispatch();
    const spotObj = useSelector(state => Object.values(state.spots));
    const { spotId } = useParams();
    const [isLoaded, setIsLoaded] = useState(false);
    const spot = spotObj[0];

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
                    <DeleteConfirmationModal spotId={spotId}/>
                    <EditModal spot={spot}/>
                </div>
                <div className='reviewSection'>
                </div>
            </div>
        )
    )
}

export default SpotPage
