// Types
import { types } from './types';

const initialState = {
    data: '',
    currentSong: '',
    randomSong: '',
};

export const likedSongsReducer = ( state = initialState, { type, payload } ) => {

    switch (type) {
        case types.LIKED_SONGS_FILL:
            return { ...state, data: payload };
        case types.SONG_FILL:
            return { ...state, currentSong: payload };
        case types.RANDOM_SONG_FILL:
            return { ...state, randomSong: payload };
        case types.CLEAR_LIKED_SONGS_STORE:
            return { ...state,
                data: '',
                currentSong: '',
                randomSong: '',
            };

        default:
            return state;
    }
};
