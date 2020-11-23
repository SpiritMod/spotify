// Core
import { combineReducers } from 'redux';

// Reducers
import { authReducer as auth } from '../bus/auth/reducer';
import { likedSongsReducer as likedSongs } from '../bus/likedSongs/reducer';
import { uiReducer as ui } from '../bus/ui';

export const rootReducer = combineReducers({
    auth,
    likedSongs,
    ui,
});
