import { FETCH_POSTS, NEW_POSTS } from "../actions/types";

const initialState = {
    items: [],
    newItem: {}
};

export default function (state = initialState, action) {
    console.log("inside post reducer ");
    switch (action.type) {
        case 'FETCH_POSTS':
            return {
                ...state,
                items: action.payload
            }
        default:
            return state;
    }
}