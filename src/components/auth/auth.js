import React from 'react';
import {authEndpoint, clientId, redirectUrl, scopes} from '../../api/config';

import "./style.scss";

export const Auth = () => {
  return (
    <>
      <div className="auth">
        <div className="auth__header">
          <h1>My Spotify</h1>
        </div>
        <a className="c-btn" href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`}>
          <span className="c-btn__text">Login to Spotify</span>
        </a>
      </div>
    </>
  );
};