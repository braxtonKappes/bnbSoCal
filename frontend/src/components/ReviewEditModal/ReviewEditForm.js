import React, { useState } from "react";
import * as reviewsActions from "../../store/review";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom"
import './ReviewEditForm.css';

function ReviewEditForm( { myReview ,setShowModal, spotId, spotReviewId } ) {
    const dispatch = useDispatch();
    let history = useHistory();
    const [rating, setRating] = useState(myReview[0].rating);
    const [review, setReview] = useState(myReview[0].review);
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
            <div className="editReviewLabel">
                <label>
                Write an updated review!
                </label>
            </div>
            <div className="inputAndSelectorContainer">
                <div className="editReviewInput">
                    <textarea
                        type="text"
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                        required
                    />
                </div>
                <div className="reviewEditRatingDropDown">
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
                </div>
            </div>
            <button onClick={handleSubmit} id="secondButtonCard" className="submitButton">Submit</button>
            <button id="buttonCard" className="reviewCancelButton" type='button' onClick={ () => setShowModal(false)}>
            Cancel
            </button>
        </form>
    </div>
    );
}

export default ReviewEditForm;
