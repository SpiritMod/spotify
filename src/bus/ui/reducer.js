// Types
import { types } from './types';

const initialState = {
    isFetching: false,
    error: false,
};

export const uiReducer = ( state = initialState, { type, payload, meta } ) => {
    switch (type) {
        case types.UI_START_FETCHING:
            return { ...state, isFetching: true };
        case types.UI_STOP_FETCHING:
            return { ...state, isFetching: false };
        case types.UI_SET_FETCHING_ERROR:
            return { ...state, error: payload };

        default:
            return state;
    }
};
