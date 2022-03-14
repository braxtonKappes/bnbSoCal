import React, { useState } from "react";
import * as reviewsActions from "../../store/review";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom"
import './ReviewEditForm.css';

function ReviewEditForm( { setShowModal, spotId, spotReviewId } ) {
    const dispatch = useDispatch();
    let history = useHistory();
    // const [isLoaded, setIsLoaded] = useState(false)
    const [rating, setRating] = useState('');
    const [review, setReview] = useState('');
    const [errors, setErrors] = useState([]);


    const handleSubmit = async (e) => {
        e.preventDefault();

        const updateReview = {
            rating,
            review
        };
        try {
            await dispatch(reviewsActions.putReview(updateReview, spotReviewId));
            history.push(`/spots/${spotId}`);
            setShowModal(false);
        } catch (error) {
            const data = await error.json();
            if (data && data.errors) setErrors(data.errors);
        }
    };

    const filteredErrors = errors.filter(error => error !== 'Invalid value')

    return (
    <div className="reviewEditFormContainer">
        <form className='reviewEditForm' onSubmit={handleSubmit}>
            <ul className={filteredErrors.length > 0 ? "errorList" : "hideErrorList"}>
            {filteredErrors.map((error, idx) => (
                <li key={idx}>{error}</li>
            ))}
            </ul>
            <label>
            Edit your review.
            </label>
            <input
                type="text"
                value={review}
                onChange={(e) => setReview(e.target.value)}
                required
            />
            <select
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            >
                <option></option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </select>
            <button onClick={handleSubmit} className="submitButton">Submit</button>
            <button className="reviewCancelButton" type='button' onClick={ () => setShowModal(false)}>
            Cancel
            </button>
        </form>
    </div>
    );
}

export default ReviewEditForm;
