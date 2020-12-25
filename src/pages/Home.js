import React, { useEffect } from 'react';
// Redux imports
import { useDispatch, useSelector } from 'react-redux';
import { loadGames } from '../actions/gamesAction';
// Importing Components
import Game from '../components/Game';
import GameDetail from '../components/GameDetail';
// Importing Styling
import styled from 'styled-components';
import { motion } from 'framer-motion';
// Route Imports
import { useLocation } from 'react-router-dom';

const Home = () => {
    // Get current location
    const location = useLocation();
    // Splitting the path to access the game ID (ID is third array element)
    const pathID = location.pathname.split("/")[2];
    // Fetching Games
    // Dispatching the loadGames action when the page loads
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadGames());
        // useEffect only runs during a dispatch
    }, [dispatch]);

    // Getting data from the state
    // Destructuring to get specific sections
    const { popular, newGames, upcoming } = useSelector(state => state.games);
    

    return (
        <GameList>
            {/* Render GameDetail component when a pathID is available */}
            {pathID && <GameDetail />}
            <h2>Upcoming Games</h2>
            <Games>
                {/* Mapping through each game in upcoming games array,
                and passing down game properties as props */}
                {upcoming.map(game => (
                    <Game 
                        name={game.name} 
                        released={game.released} 
                        id={game.id}
                        key={game.id}
                        image={game.background_image}
                    />
                ))}
            </Games>
            <h2>Popular Games</h2>
            <Games>
                {/* Mapping through each game in upcoming games array,
                and passing down game properties as props */}
                {popular.map(game => (
                    <Game 
                        name={game.name} 
                        released={game.released} 
                        id={game.id}
                        key={game.id}
                        image={game.background_image}
                    />
                ))}
            </Games>
            <h2>New Games</h2>
            <Games>
                {/* Mapping through each game in upcoming games array,
                and passing down game properties as props */}
                {newGames.map(game => (
                    <Game 
                        name={game.name} 
                        released={game.released} 
                        id={game.id}
                        key={game.id}
                        image={game.background_image}
                    />
                ))}
            </Games>
        </GameList>
    )
}

// Styled Components
const GameList = styled(motion.div)`
    padding: 0rem 5rem;
    h2 {
        padding: 5rem 0rem;
    }
`

const Games = styled(motion.div)`
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    grid-column-gap: 3rem;
    grid-row-gap: 5rem;
`

export default Home;