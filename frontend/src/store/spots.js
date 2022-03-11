import { csrfFetch } from './csrf'

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

const editSpot = (spotId) => ({
    type: EDIT_SPOT,
    spotId
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
        return updatedSpot
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
export const getOneSpot = (spotId) => async (dispatch) => {
    const res = await csrfFetch(`/api/spots/${spotId}`)

    if (res.ok) {
        const spot = await res.json();
        dispatch(loadOne(spot))
        return spot;
    };
};

// Create a spot
export const hostSpot = (data) => async (dispatch) => {
    const res = await csrfFetch(`/api/spots`, {
        method: `POST`,
        body: JSON.stringify(data)
    });

    if (res.ok) {
        const spot = await res.json();
        dispatch(addSpot(spot));
        return spot;
    }
}

// Delete a spot
export const delSpot = (data) => async (dispatch) => {
    const res = await csrfFetch(`/api/spots/`, {
        method: `DELETE`,
        body: JSON.stringify(data),
    });
    if (res.ok) {
        const spotId = await res.json();
        dispatch(removeSpot(spotId))
        return spotId;
    }
}

const initialState = {
    list: [],
    oneSpot: {}
};

const spotsReducer = (state=initialState, action) => {
    let newState = {...state};

    switch (action.type) {
        case LOAD_ALL: {
            const spotsList = {};
            action.list.forEach(spot => {
                spotsList[spot.id] = spot
            });
            return{
                list: action.list
            }
        }
        case LOAD_ONE: {
            console.log("Hello newState", newState);
            newState.oneSpot = action.spot
            return newState;
        }
        case ADD_SPOT: {
            newState[action.spot.id] = {...state.spot}
            return newState;
        }
        case REMOVE_SPOT: {
            delete newState[action.spotId]
            return newState
        }
        case EDIT_SPOT: {
            newState[action.spot.id] = action.spot
            return newState;
        }
        default:
            return state;
    }
}

export default spotsReducer;
