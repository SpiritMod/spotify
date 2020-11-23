import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import { useCookies } from 'react-cookie';

import {Auth} from "../components/auth/auth";
import {useAuth} from "../bus/auth/hooks/useAuth";
import hash from "../helpers/hash"
import {authActions} from "../bus/auth/actions";
import {LikedSongs} from "../bus/likedSongs";


const Layout = () => {
  const dispatch = useDispatch();
  const { loggedIn } = useAuth();
  const [cookieAuth, setCookieAuth] = useCookies(['access_token']);


  useEffect(() => {
    if (hash.access_token) {
      let dataAuth = {
        type:'access_token',
        access_token: hash.access_token,
        expires_in: hash.expires_in || 0,
      };

      setCookieAuth('access_token', hash.access_token, { path: '/' });

      dispatch(authActions.fill(dataAuth));
    } else if (cookieAuth.access_token) {
      dispatch(authActions.fill({
        type:'access_token',
        access_token: cookieAuth.access_token,
        expires_in: 0,
      }));
    }
  },[hash.access_token]);

  return (
    <>
      <main className="main">
        <div className="container">
          {
            loggedIn ? <LikedSongs /> : <Auth />
          }
        </div>
      </main>
    </>
  )
};

export default Layout;
