// Component for showing game details

import React from 'react';
// Importing Styling
import styled from 'styled-components';
import { motion } from 'framer-motion';
// Importing Redux
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
// Importing utility to resize images
import { smallImage } from '../util';
// Importing images for platforms and star ratings
import playstation from '../img/playstation.svg';
import steam from '../img/steam.svg';
import xbox from '../img/xbox.svg';
import nintendo from '../img/nintendo.svg';
import apple from '../img/apple.svg';
import gamepad from '../img/gamepad.svg';
import starEmpty from '../img/star-empty.png';
import starFull from '../img/star-full.png';


const GameDetail = ({ pathID }) => {

    const history = useHistory();

    // Exit Detail
    const exitDetailHandler = (e) => {
        const element = e.target;
        // If the clicked element (card shadow) has a class of "shadow",
        // Set the url to home page
        if (element.classList.contains("shadow")) {
            document.body.style.overflow = "auto";
            history.push("/")
        }
    }

    // Retrieving both the details and screenshots for the game
    const { screen, game, isLoading } = useSelector((state) => state.detail)

    // Get Platform Images
    const getPlatform = (platform) => {
        switch(platform) {
            case "PlayStation 4":
                return playstation;
            case "Xbox One":
                return xbox;
            case "PC":
                return steam;
            case "Nintendo Switch":
                return nintendo;
            case "iOS":
                return apple;
            default:
                return gamepad;
        }
    }

    // Get Stars
    const getStars = () => {
        const stars = [];
        const rating = Math.floor(game.rating);
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars.push(<img alt="star" key={i} src={starFull} />)
            } else {
                stars.push(<img alt="star" key={i} src={starEmpty} />)
            }
        }
        return stars;
    }

    return (
        <>
            {!isLoading && (
                <CardShadow className="shadow" onClick={exitDetailHandler}>
                    {/* Layout ID needed for animations */}
                    <Detail layoutId={pathID}>
                        <Stats>
                            <div className="rating">
                                <h3>{game.name}</h3>
                                <p>Rating: {game.rating}</p>
                                {getStars()}
                            </div>
                            <Info>
                                <h3>Platforms</h3>
                                <Platforms>
                                    {/* We map because platforms is a nested array */}
                                    {/* && ensures data is available before mapping */}
                                    {/* Platform images loaded by passing in platform name to function */}
                                    {game.platforms && game.platforms.map(data => (
                                        <img key={data.platform.id} src={getPlatform(data.platform.name)} alt={data.platform.name} />
                                    ))}
                                </Platforms>
                            </Info>
                        </Stats>
                        <Media>
                            <motion.img layoutId={`image ${pathID}`} src={smallImage(game.background_image, 1280)} alt="background" />
                        </Media>
                        <Description>
                            <p>{game.description_raw}</p>
                        </Description>
                        <div className="gallery">
                            {/* Mapping through the screenshots */}
                            {/* && ensures data is available before mapping */}
                            {screen.results && screen.results.map(screen => (
                                <img scr={smallImage(screen.image, 1280)} key={screen.id} alt="screenshot" />
                            ))}
                        </div>
                    </Detail>
                </CardShadow>
            )}
        </>
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
    img {
        /* Styling the stars */
        width: 2rem;
        height: 2rem;
        display: inline;
    }
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