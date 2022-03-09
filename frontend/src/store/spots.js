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
    const res = csrfFetch(`/api/spots`)
}
