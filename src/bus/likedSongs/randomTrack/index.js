// Core
import React from 'react';
import {useAuth} from "../../auth/hooks/useAuth";
import {useLikedSongs} from "../hooks/useLikedSongs";
import {ItemSong} from "../../../components/itemSong/itemSong";

import "./index.scss";

export const RandomTrack = () => {
  const { data, loggedIn } = useAuth();
  const { getRandom, putLikeSong, randomSong, error } = useLikedSongs();

  const handleRandomSong = () => {
    getRandom(data.access_token);
  };

  const handleLikeSong = () => {
    putLikeSong(randomSong.id, data.access_token);
  };

  return (
    <>
      {
        loggedIn && !error && <div className="random-track">
          <div className="random-track__header">
            <h1>Random Track</h1>
            <button className="c-btn" onClick={handleRandomSong}><span className="c-btn__text">Get Random</span></button>
          </div>
          <div className="random-track__content">
            {
              randomSong && <ItemSong song={randomSong} />
            }
            {
              randomSong && <button className="c-btn c-btn--small" onClick={handleLikeSong}><span className="c-btn__text">Like Track</span></button>
            }
          </div>
        </div>
      }
    </>
  )
};