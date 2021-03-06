import { csrfFetch } from './csrf'
import { addImage } from './images';

const LOAD_ALL = 'spots/LOAD_ALL';
const LOAD_ONE = 'spots/LOAD_ONE';
const ADD_SPOT = 'spots/ADD_SPOT';
const REMOVE_SPOT = 'spots/REMOVE_SPOT';
const EDIT_SPOT = 'spots/EDIT_SPOT';

const loadAll = (list) => ({
    type: LOAD_ALL,
    list
});

const loadOne = (spot) => ({
    type: LOAD_ONE,
    spot
});

const addSpot = (spot) => ({
    type: ADD_SPOT,
    spot
});

const removeSpot = (spotId) => ({
    type: REMOVE_SPOT,
    spotId
});

const editSpot = (updatedSpot) => ({
    type: EDIT_SPOT,
    updatedSpot
});

// Edit a spot
export const putSpot = (data) => async (dispatch) => {
    const res = await csrfFetch(`/api/spots`, {
        method: "PUT",
        body: JSON.stringify(data),
    })
    if (res.ok) {
        const updatedSpot = await res.json()
        dispatch(editSpot(updatedSpot))
        return updatedSpot;
    }
}

// Create a spot
export const hostSpot = (data) => async (dispatch) => {
    const res = await csrfFetch(`/api/spots`, {
        method: `POST`,
        body: JSON.stringify(data)
    });

    if (res.ok) {
        const spotData = await res.json();
        dispatch(addSpot(spotData.spot));
        return spotData;
    }
}

// Get all spots
export const getAllSpots = () => async (dispatch) => {
    const res = await csrfFetch(`/api/spots`)

    if (res.ok) {
        const spots = await res.json();
        dispatch(loadAll(spots))
        return spots;
    };
};

// Get one spot
export const getOneSpot = (id) => async (dispatch) => {
    const res = await csrfFetch(`/api/spots/${id}`)

    if (res.ok) {
        const spot = await res.json();
        dispatch(loadOne(spot))
        return spot;
    };
};


// Delete a spot
export const delSpot = (id) => async (dispatch) => {
    const res = await csrfFetch(`/api/spots/${id}`, {
        method: `DELETE`,
        body: JSON.stringify({id}),
    });
    if (res.ok) {
        const spotId = await res.json();
        dispatch(removeSpot(spotId))
        return spotId;
    }
}

const spotsReducer = (state={
    oneSpot: {},
    allSpots: {}
    }, action) => {
    let newState = {...state}
    switch (action.type) {
        case LOAD_ALL: {
            action.list.forEach(spot => {
            newState.allSpots[spot.id] = spot;
            });
            return newState;
        }
        case LOAD_ONE: {
            newState.oneSpot = action.spot
            return newState;
        }
        case ADD_SPOT: {
            newState.allSpots[action.spot.id] = action.spot
            return newState;
        }
        case REMOVE_SPOT: {
            delete newState.allSpots[action.spotId]
            return newState
        }
        case EDIT_SPOT: {
            newState.allSpots[action.updatedSpot.id] = action.updatedSpot
            return newState;
        }
        default:
            return state;
    }
}

export default spotsReducer;
