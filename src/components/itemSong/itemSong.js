import React from 'react';
import {msToMin} from "../../helpers/msToMin";

import "./itemSong.scss";
import {useAuth} from "../../bus/auth/hooks/useAuth";
import {useLikedSongs} from "../../bus/likedSongs/hooks/useLikedSongs";

export const ItemSong = ({song}) => {
  const { data } = useAuth();
  const { getSong } = useLikedSongs();

  const name = song.name;
  const artists = song.artists.map((artist) => <span key={artist.id}>{artist.name}</span>);
  const album = song.album.name;
  const duration = msToMin(+song.duration_ms);
  const img = song.album.images[2].url;

  const handleClick = (id) => {
    getSong(id, data.access_token);
  };

  return (
    <div className="item-song" key={song.id} onClick={(e) => handleClick(song.id)}>
      <div className="item-song__col">
        <img src={img} alt={album}/>
        <div className="item-song__group" >
          <div className="item-song__name">{name}</div>
          <div className="item-song__artists">{artists}</div>
        </div>
      </div>
      <div className="item-song__col">
        <div className="item-song__album">{album}</div>
      </div>
      <div className="item-song__col">
        <div className="item-song__duration">{duration}</div>
      </div>
    </div>
  );
};