// Component for showing game details

import React from 'react';
// Importing Styling
import styled from 'styled-components';
import { motion } from 'framer-motion';
// Importing Redux
import { useSelector } from 'react-redux';

const GameDetail = () => {
    // Retrieving both the details and screeenshots for the game
    const { screen, game } = useSelector(state => state.detail)
    return (
        <CardShadow>
            <Detail>
                <Stats>
                    <div className="rating">
                        <h3>{game.name}</h3>
                        <p>Rating: {game.rating}</p>
                    </div>
                    <Info>
                        <h3>Platforms</h3>
                        <Platforms>
                            {/* We map because platforms is a nested array */}
                            {/* && ensures data is available before mapping */}
                            {game.platforms && game.platforms.map(data => (
                                <h3 key={data.platform.id}>{data.platform.name}</h3>
                            ))}
                        </Platforms>
                    </Info>
                </Stats>
                <Media>
                    <img src={game.background_image} alt="background" />
                </Media>
                <Description>
                    <p>{game.description_raw}</p>
                </Description>
                <div className="gallery">
                    {/* Mapping through the screenshots */}
                    {/* && ensures data is available before mapping */}
                    {screen.results && screen.results.map(screen => (
                        <img scr={screen.image} key={screen.id} alt="screenshot" />
                    ))}
                </div>
            </Detail>
        </CardShadow>
    )
}

const CardShadow = styled(motion.div)`
    width: 100%;
    min-height: 100vh;
    /* Overflow Y to keep it fixed while we scroll */
    overflow-y: scroll;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    &::-webkit-scrollbar {
        width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #ff7676;
    }
    &::-webkit-scrollbar-track {
        background: white;
    }
`

const Detail = styled(motion.div)`
    width: 80%;
    border-radius: 1rem;
    padding: 2rem 5rem;
    background: white;
    color: black;
    position: absolute;
    left: 10%;
    img {
        /* Keeping images inside the card */
        width: 100%;
    }
`

const Stats = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Info = styled(motion.div)`
    text-align: center;
`

const Platforms = styled(motion.div)`
    display: flex;
    justify-content: space-evenly;
    /* Images here are platform icons */
    img {
        margin-left: 3rem;
    }
`

const Media = styled(motion.div)`
    margin-top: 5rem;
    img {
        width: 100%;
        /* height: 60vh;
        object-fit: cover; */
    }
`

const Description = styled(motion.div)`
    margin: 5rem 0rem;
`

export default GameDetail;