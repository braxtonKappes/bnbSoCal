import { csrfFetch } from './csrf'

const LOAD_ALL = 'spots/LOAD_ALL';
const LOAD_ONE = 'spots/LOAD_ONE';
const ADD_SPOT = 'spots/ADD_SPOT';
const REMOVE_SPOT = 'spots/REMOVE_SPOT';

const loadAll = (list) => ({
    type: LOAD_ALL,
    list
});

const loadOne = (list) => ({
    type: LOAD_ONE,
    list
});

const addSpot = (list) => ({
    type: ADD_SPOT,
    list
});

const removeSpot = (list) => ({
    type: REMOVE_SPOT,
    list
});

export const getAllSpots = () => async (dispatch) => {
    const res = await csrfFetch(`/api/spots`)

    if (res.ok) {
        const spots = await res.json();
        dispatch(loadAll(spots))
        return spots;
    }
};

const initialState = {
    list: {},
};

const spotsReducer = (state=initialState, action) => {
    switch (action.type) {
        case LOAD_ALL: {
            const allSpots = {}
            action.list.forEach(spot => {
                allSpots[spot.id] = spot
            });
            return{
                ...allSpots,
                ...state.list,
                list: action.list
            }
        }
        default:
            return state;
    }
}

export default spotsReducer;
