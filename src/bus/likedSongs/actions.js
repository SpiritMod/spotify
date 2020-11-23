// Types
import { types } from './types';

// Instruments
import { api } from './api';
import { uiActions } from '../ui';

export const likedSongsActions = Object.freeze({
    // Sync
    fill: (payload) => {
        return {
            type: types.LIKED_SONGS_FILL,
            payload
        }
    },
    songFill: (payload) => {
        return {
            type: types.SONG_FILL,
            payload
        }
    },
    randomSongFill: (payload) => {
        return {
            type: types.RANDOM_SONG_FILL,
            payload
        }
    },
    clearStore: () => {
        return {
            type: types.CLEAR_LIKED_SONGS_STORE,
        }
    },

    // Async
    fetchAsync: (access_token) => async (dispatch) => {
        dispatch({
            type: types.LIKED_SONGS_FETCH_ASYNC
        });

        dispatch(uiActions.startFetching());

        try {
            const response = await api.likedSongs.fetch(access_token);
            //console.log(response);

            if (response.status === 200) {
                const results = response.data.items;

                dispatch(likedSongsActions.fill(results));
            }
            else if (response.error === 401) {
                //console.log(response);
            } else {
                const error = {
                    status: response.status
                };

                dispatch(uiActions.setFetchingError(error));
            }
        }
        catch (error) {
            dispatch(uiActions.setFetchingError({
                status: 401,
                message: error.message,
            }));
        }

        dispatch(uiActions.stopFetching());
    },

    getSong: (id, access_token) => async (dispatch) => {
        dispatch({
            type: types.SONG_FETCH_ASYNC
        });

        dispatch(uiActions.startFetching());

        try {
            const response = await api.getSong.fetch(id, access_token);

            if (response.status === 200) {
                const results = response.data;

                dispatch(likedSongsActions.songFill(results));
            }
            else if (response.error === 401) {
                console.log('tetetetet');
            } else {
                const error = {
                    status: response.status
                };

                dispatch(uiActions.setFetchingError(error));
            }
        }
        catch (error) {
            console.log(error);
            dispatch(uiActions.setFetchingError({
                status: 401,
                message: error.message,
            }));
        }

        dispatch(uiActions.stopFetching());
    },

    getRandomSong: (access_token) => async (dispatch) => {
        dispatch({
            type: types.SONG_FETCH_ASYNC
        });

        dispatch(uiActions.startFetching());

        try {
            const response = await api.getRandomSong.fetch(access_token);

            if (response.status === 200) {
                const results = response.data.tracks.items;

                dispatch(likedSongsActions.randomSongFill(results));
            }
            else if (response.error === 401) {
                //console.log(response);
            } else {
                const error = {
                    status: response.status
                };

                dispatch(uiActions.setFetchingError(error));
            }
        }
        catch (error) {
            dispatch(uiActions.setFetchingError({
                status: 401,
                message: error.message,
            }));
        }

        dispatch(uiActions.stopFetching());
    },

    putLikeSong: (id, access_token) => async (dispatch) => {
        dispatch({
            type: types.LIKE_SONG_FETCH_ASYNC
        });

        dispatch(uiActions.startFetching());

       try {
           const response = await api.addToLikedSongs.fetch(id, access_token);

            if (response.status === 200) {
                dispatch(likedSongsActions.fetchAsync(access_token));
            }
            else if (response.error === 401) {
                //console.log(response);
            } else {
                const error = {
                    status: response.status
                };

                dispatch(uiActions.setFetchingError(error));
            }
        }
        catch (error) {
            dispatch(uiActions.setFetchingError({
                status: 401,
                message: error.message,
            }));
        }

        dispatch(uiActions.stopFetching());
    },

});
