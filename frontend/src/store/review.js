import { csrfFetch } from './csrf'

const LOAD_ALL = 'reviews/LOAD_ALL';
const ADD_REVIEW = 'reviews/ADD_SPOT';
const REMOVE_REVIEW = 'reviews/REMOVE_SPOT';
const EDIT_REVIEW = 'reviews/EDIT_SPOT';

const loadAll = (allReviews) => ({
    type: LOAD_ALL,
    allReviews
});

const addReview = (review) => ({
    type: ADD_REVIEW,
    review
});

const removeReview = (reviewId) => ({
    type: REMOVE_REVIEW,
    reviewId
});

const editReview = (reviewId) => ({
    type: EDIT_REVIEW,
    reviewId
});

// Get all reviews for spot
export const getAllReviews = () => async (dispatch) => {
    const res = await csrfFetch(`/api/reviews`)

    if (res.ok) {
        const reviews = await res.json();
        dispatch(loadAll(reviews))
        return reviews;
    }
}

// export const getAllSpots = () => async (dispatch) => {
//     const res = await csrfFetch(`/api/spots`)

//     if (res.ok) {
//         const spots = await res.json();
//         dispatch(loadAll(spots))
//         return spots;
//     };
// };


// Create a review



// export const hostSpot = (data) => async (dispatch) => {
//     const res = await csrfFetch(`/api/spots`, {
//         method: `POST`,
//         body: JSON.stringify(data)
//     });

//     if (res.ok) {
//         const spotData = await res.json();
//         console.log("this is spotData BEFORE dispatch,", spotData);
//         dispatch(addSpot(spotData.spot));
//         return spotData;
//     }
// }

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

// Delete a review



// export const delSpot = (id) => async (dispatch) => {
//     const res = await csrfFetch(`/api/spots/${id}`, {
//         method: `DELETE`,
//         body: JSON.stringify({id}),
//     });
//     if (res.ok) {
//         const spotId = await res.json();
//         dispatch(removeSpot(spotId))
//         return spotId;
//     }
// }

const reviewsReducer = (state={}, action) => {
    let newState = {...state}
    switch (action.type) {
        case LOAD_ALL: {
            action.allReviews.forEach(review => {
            newState[review.id] = review;
            });
            return newState;
        }
        case ADD_REVIEW: {
            newState[action.review.id] = action.review
            return newState;
        }
        case EDIT_REVIEW: {
            newState[action.review.id] = action.review
            return newState;
        }
        case REMOVE_REVIEW: {
            delete newState[action.reviewId]
            return newState
        }
        default:
            return state;
    }
}

export default reviewsReducer;
