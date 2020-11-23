// Types
import { types } from './types';

export const authActions = Object.freeze({
    // Sync
    fill: (payload) => {
        return {
            type: types.AUTH_FILL,
            payload
        }
    },
    logout: () => {
        return {
            type: types.AUTH_LOGOUT,
        }
    }
});
