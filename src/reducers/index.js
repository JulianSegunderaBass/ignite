// Compiling the reducers

import { combineReducers } from 'redux';
// Importing reducers
import gamesReducer from './gamesReducer';
import detailReducer from './detailReducer';

const rootReducer = combineReducers({
    // Taking in our reducers
    games: gamesReducer,
    detail: detailReducer,
});

export default rootReducer;