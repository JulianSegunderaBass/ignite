// The card component for each game

import React from 'react';
// Importing Styling
import styled from 'styled-components';
import { motion } from 'framer-motion';
// Redux
import { useDispatch } from 'react-redux';
import { loadDetail } from '../actions/detailAction';
import { Link } from 'react-router-dom';
// Importing utility to resize images
import { smallImage } from '../util';

// Taking in props from the game array properties
const Game = ({name, released, image, id}) => {

    // Converting the ID to a string so it matches with the
    // other IDs, enabling the animations
    const stringPathID = id.toString();

    // Loading the game details
    const dispatch = useDispatch();

    const loadDetailHandler = () => {
        // overflow here keeps background from scrolling
        // when game details are open
        document.body.style.overflow = "hidden";
        dispatch(loadDetail(id));
    }

    return (
        // LayoutID needed for animations
        <StyledGame layoutId={stringPathID} onClick={loadDetailHandler}>
            <Link to={`/game/${id}`}>
                <h3>{name}</h3>
                <p>{released}</p>
                {/* Passing in the smallImage utility function
                along with an image size value */}
                <motion.img layoutId={`image ${stringPathID}`} src={smallImage(image, 640)} alt={name} />
            </Link>
        </StyledGame>
    )
}

// Styled Components
const StyledGame = styled(motion.div)`
min-height: 30vh;
box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
text-align: center;
border-radius: 1rem;
cursor: pointer;
overflow: hidden;
    img {
        width: 100%;
        /* All images have the same height */
        height: 40vh;
        object-fit: cover;
    }
`

export default Game;