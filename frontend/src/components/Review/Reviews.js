import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllReviews } from '../../store/review'
import './Reviews.css'

function Reviews({ spotId }) {
    const [isLoaded, setIsLoaded] = useState(false);
    const dispatch = useDispatch();
    const reviews = useSelector(state => Object.values(state.reviews))
    const spotReviews = reviews.filter(review => spotId == review.spotId)


    useEffect(() => {
        const loaded = async () => {
            await dispatch(getAllReviews())
            setIsLoaded(true)
        }
        loaded();
    }, [dispatch]);

    return (
        isLoaded && (
            <div className='reviewsMainContainer'>
                <div className='reviewsContainer'>
                    {spotReviews.map(spotReview => (
                        <div key={spotReview.id} className='reviewContainer'>
                                <p>{spotReview.rating}</p>
                                <p>{spotReview.review}</p>
                        </div>
                    ))}
                </div>
                <div className='createReviewContainer'>
                    Create a review
                </div>
            </div>
        )
    )
}


export default Reviews
