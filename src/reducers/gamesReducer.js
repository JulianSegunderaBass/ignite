// The reducer holding the game data

// The initial state for the reducer
const initState = {
    popular: [],
    newGames: [],
    upcoming: [],
    searched: [],
}

const gamesReducer = (state=initState, action) => {
    // Switch statement to check different actions
    switch(action.type) {
        // Dispatching action "FETCH_GAMES"
        case "FETCH_GAMES":
            // Returns all of the state (all arrays)
            // Second parameter updates the specific game array state
            return {...state, 
                popular: action.payload.popular,
                upcoming: action.payload.upcoming,
                newGames: action.payload.newGames
            }
        default: 
            return {...state}
    }
}

export default gamesReducer