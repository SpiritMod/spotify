// Types
import { types } from './types';

export const uiActions = Object.freeze({
    // Sync
    startFetching: () => {
        return {
            type: types.UI_START_FETCHING
        }
    },
    stopFetching: () => {
        return {
            type: types.UI_STOP_FETCHING,
        }
    },
    setFetchingError: (error) => {
        return {
            type: types.UI_SET_FETCHING_ERROR,
            error: true,
            payload: error,
        }
    },
});
