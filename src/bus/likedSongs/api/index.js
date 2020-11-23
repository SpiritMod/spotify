import axios from 'axios';

import { urlLikedSongs, urlGetSongs, urlGetSearch } from '../../../api/config';
import {randomSearch} from "../../../helpers/randomSearch";

export const api = Object.freeze({
    likedSongs: {
        fetch: (access_token) => {
            return axios.get(`${urlLikedSongs}?limit=50`, {
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${access_token}`,
                },
            })
        }
    },
    getSong: {
        fetch: (id, access_token) => {
            return axios.get(`${urlGetSongs}/${id}`, {
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${access_token}`,
                },
            })
        }
    },
    getRandomSong: {
        fetch: (access_token) => {
            const randomOffset = Math.floor(Math.random() * 1000);
            const search = randomSearch();

            return axios.get(`${urlGetSearch}?q=${search}&type=track&market=US&offset=${randomOffset}&limit=1`, {
                headers: {
                    "Accept": "application/json",
                    "Authorization": `Bearer ${access_token}`,
                },
            })
        }
    },
    addToLikedSongs: {
        fetch: (id, access_token) => {
            return fetch(`https://api.spotify.com/v1/me/tracks?ids=${id}`, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${access_token}`
                }
            });
        }
    },
});