import React, { useEffect } from 'react';
// Redux imports
import { useDispatch } from 'react-redux';
import { loadGames } from '../actions/gamesAction';

const Home = () => {
    // Fetching Games
    // Dispatching the loadGames action when the page loads
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadGames());
    });
    return (
        <div>
            <h1>Home</h1>
        </div>
    )
}

export default Home;