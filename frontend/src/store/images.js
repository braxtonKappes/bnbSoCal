import { csrfFetch } from './csrf'

const ADD_IMG = 'spots/ADD_SPOT';

export const addImage = (img) => ({
    type: ADD_IMG,
    img
});


// Add image
export const addImg = (url) => async (dispatch) => {
    const res = await csrfFetch(`/api/images`, {
        method: "POST",
        body: JSON.stringify({url}),
    })
    if (res.ok) {
        const imgToAdd = await res.json()
        dispatch(addImage(imgToAdd))
        return imgToAdd;
    }
}

// Reducers
const imageReducer = (state={}, action) => {
    let newState = {...state};
    switch (action.type) {
        case ADD_IMG: {
            newState[action.spot.id] = action.id
            return newState;
        }
        default:
            return state;
    }
}

export default imageReducer;
