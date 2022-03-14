import { csrfFetch } from './csrf'

const LOAD_ALL = 'reviews/LOAD_ALL';
const ADD_REVIEW = 'reviews/ADD_SPOT';
const REMOVE_REVIEW = 'reviews/REMOVE_SPOT';
const EDIT_REVIEW = 'reviews/EDIT_SPOT';
const CLEAR_STATE = 'reviews/CLEAR_STATE'

const loadAll = (reviews) => ({
    type: LOAD_ALL,
    reviews
});

const addReview = (review) => ({
    type: ADD_REVIEW,
    review
});

const removeReview = (reviewId) => ({
    type: REMOVE_REVIEW,
    reviewId
});

// const editReview = (reviewId) => ({
//     type: EDIT_REVIEW,
//     reviewId
// });

const clearestState = () => ({
    type: CLEAR_STATE
})

export const clearMyState = () => async (dispatch) => {
    dispatch(clearestState())
}

// Get all reviews for spot
export const getAllReviews = (id) => async (dispatch) => {
    const res = await csrfFetch(`/api/spots/${id}/reviews`)

    if (res.ok) {
        const reviews = await res.json();
        dispatch(loadAll(reviews))
        return reviews;
    }
}

// Create a review

export const createReview = (data, spotId) => async (dispatch) => {
    const res = await csrfFetch(`/api/spots/${spotId}/reviews`, {
        method: 'POST',
        body: JSON.stringify(data)
    });

    if (res.ok) {
        const reviewData = await res.json();
        dispatch(addReview(reviewData));
        return reviewData;
    };
};

// Delete a review

export const delReview = (id) => async (dispatch) => {
    const res = await csrfFetch(`/api/reviews/${id}`, {
        method: `DELETE`,
        body: JSON.stringify({id})
    });
    if(res.ok) {
        const reviewId = await res.json();
        dispatch(removeReview(reviewId))
        return reviewId;
    }
}

// Edit a review



// export const putSpot = (data) => async (dispatch) => {
//     const res = await csrfFetch(`/api/spots`, {
//         method: "PUT",
//         body: JSON.stringify(data),
//     })
//     if (res.ok) {
//         const updatedSpot = await res.json()
//         dispatch(editSpot(updatedSpot))
//         return updatedSpot
//     }
// }


const reviewsReducer = (state={
    allReviews: {}
}, action) => {
    let newState = {...state}
    switch (action.type) {
        case LOAD_ALL: {
            action.reviews.forEach(review => {
            newState.allReviews[review.id] = review;
            });
            return newState;
        }
        case ADD_REVIEW: {
            newState.allReviews[action.review.id] = action.review
            return newState;
        }
        case EDIT_REVIEW: {
            newState.allReviews[action.review.id] = action.review
            return newState;
        }
        case REMOVE_REVIEW: {
            delete newState.allReviews[action.reviewId]
            return newState
        }
        case CLEAR_STATE: {
            newState.allReviews = {}
            return newState;
        }
        default:
            return state;
    }
}

export default reviewsReducer;
