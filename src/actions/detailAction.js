// Action for the details per game via game ID

import axios from 'axios';
// Importing the game details and screenshots url
import { gameDetailsURL, gameScreenshotURL } from '../api';

export const loadDetail = (id) => async (dispatch) => {
    // In the API, gameDetailsURL and gameScreenshotURL 
    // expect an ID parameter
    const detailData = await axios.get(gameDetailsURL(id));
    const screenshotData = await axios.get(gameScreenshotURL(id));

    dispatch({
        type: "GET_DETAIL",
        payload: {
            game: detailData.data,
            screen: screenshotData.data
        }
    });
}