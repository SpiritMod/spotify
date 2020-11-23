// Types
import { types } from './types';

const initialState = {
    data: null,
    loggedIn: false,
};

export const authReducer = ( state = initialState, { type, payload } ) => {
    switch (type) {
        case types.AUTH_FILL:
            return { ...state, data: payload, loggedIn: true };
        case types.AUTH_LOGOUT:
            return { ...state, data: null, loggedIn: false };
        default:
            return state;
    }
};
