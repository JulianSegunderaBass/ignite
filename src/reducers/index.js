// Compiling the reducers

import { combineReducers } from 'redux';
// Importing reducers
import gamesReducer from './gamesReducer';

const rootReducer = combineReducers({
    // Taking in our reducers
    games: gamesReducer,
});

export default rootReducer;