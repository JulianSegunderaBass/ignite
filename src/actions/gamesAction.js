// Actions for the games

import axios from 'axios';
// Importing the Game URL Links
import { popularGamesURL, upcomingGamesURL, newGamesURL, searchGameURL } from '../api';

// Actions - objects that describe what will happen
// Action Creator - function that returns an action
export const loadGames = () => async (dispatch) => {
    // The second arrow function lets you dispatch any action you want
    // Redux Thunk allows for async
    // axios.get functions run the URL functions which fetch data
    // Await = wait for the data to finish loading
    const popularGamesData = await axios.get(popularGamesURL());
    const newGamesData = await axios.get(newGamesURL());
    const upcomingGamesData = await axios.get(upcomingGamesURL());
    // Payload for the data we receive
    // Goes to reducer
    dispatch({
        type: "FETCH_GAMES",
        payload: {
            // .data.results sifts through data to return only list of games
            // We return the data for all the URL patterns
            popular: popularGamesData.data.results,
            upcoming: upcomingGamesData.data.results,
            newGames: newGamesData.data.results
        }
    });
}

// For searching via the searchbar
export const fetchSearch = (game_name) => async (dispatch) => {
    const searchGames = await axios.get(searchGameURL(game_name));

    dispatch({
        type: "FETCH_SEARCHED",
        payload: {
            searched: searchGames.data.results,
        }
    })
}