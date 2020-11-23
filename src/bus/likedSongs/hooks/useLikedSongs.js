import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { likedSongsActions } from '../actions';
import {useAuth} from "../../auth/hooks/useAuth";

export const useLikedSongs = () => {
  const dispatch = useDispatch();
  const { data } = useAuth();


  const likedSongsData = useSelector((state) => state.likedSongs.data);
  const currentSong = useSelector((state) => state.likedSongs.currentSong);
  const randomSong = useSelector((state) => state.likedSongs.randomSong[0]);
  const { isFetching, error } = useSelector((state) => state.ui);


  useEffect(() => {
    if (data.access_token && !likedSongsData) {
      dispatch(likedSongsActions.fetchAsync(data.access_token));
    }
  },[dispatch, data.access_token]);


  const getSong = (id, token) => {
    dispatch(likedSongsActions.getSong(id, token));
  };

  const getRandom = (token) => {
    dispatch(likedSongsActions.getRandomSong(token));
  };

  const putLikeSong = (id, token) => {
    dispatch(likedSongsActions.putLikeSong(id, token));
  };

  const clearStore = () => {
    dispatch(likedSongsActions.clearStore());
  };

  return {
    likedSongsData,
    currentSong,
    randomSong,
    getSong,
    getRandom,
    putLikeSong,
    clearStore,
    isFetching,
    error
  }
};
