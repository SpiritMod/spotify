// Core
import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import {useCookies} from "react-cookie";

import { useLikedSongs } from './hooks/useLikedSongs';
import { ItemSong } from "../../components/itemSong/itemSong";

import "./styles.scss";
import {useAuth} from "../auth/hooks/useAuth";
import {RandomTrack} from "./randomTrack";

export const LikedSongs = () => {
  const { logout } = useAuth();
  const { isFetching, currentSong, clearStore, likedSongsData, error } = useLikedSongs();
  const [cookieAuth, setCookieAuth, removeCookieAuth] = useCookies(['access_token']);

  const errorAuth = error.status === 401 && (<p>{ error.message }</p>);

  const errorMessage = error.status === 404 && (
    <p>Not found!</p>
  );

  const itemsSongs = likedSongsData && likedSongsData.map((item) => {
    return (
      <ItemSong song={item.track} key={item.track.id} />
    )
  });

  const loader = isFetching && !likedSongsData && (
    <p>Loading data from API...</p>
  );

  // Handlers
  const handleLogout = () => {
    removeCookieAuth('access_token', { path: '/' });
    clearStore();
    logout();
  };



  return (
    <>
      <RandomTrack />
      <h1>Liked Songs</h1>
      {errorAuth}
      {errorMessage}
      {loader}
      {
        likedSongsData && (
          <div className="track-list">
            {itemsSongs}
          </div>
        )
      }
      {
        errorAuth && <div className="back"><button className="c-btn" onClick={handleLogout}><span className="c-btn__text">Go Home</span> </button></div>
      }
      {
        currentSong && <div className="player-wrapper">
          <ReactAudioPlayer
            src={currentSong.preview_url}
            autoPlay
            controls
          />
        </div>
      }
    </>
  )
};
