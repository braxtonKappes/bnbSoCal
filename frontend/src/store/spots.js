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
    type: REMOVE_SPOT,
    spotId
});

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

export const getAllSpots = () => async (dispatch) => {
    const res = await csrfFetch(`/api/spots`)

    if (res.ok) {
        const spots = await res.json();
        dispatch(loadAll(spots))
        return spots;
    };
};

export const getOneSpot = () => async (dispatch) => {
    const res = await csrfFetch(`/api/spots`)

    if (res.ok) {
        const spot = await res.json();
        dispatch(loadOne(spot))
        return spot;
    };
};

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
};

const spotsReducer = (state=initialState, action) => {
    const newState = {...state};
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
            newState = {
            [action.spot.id]: action.spot
            }
            return newState;
        }
        case ADD_SPOT: {
            // newState = {...state, [action.spot.id]: action.spot}
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
