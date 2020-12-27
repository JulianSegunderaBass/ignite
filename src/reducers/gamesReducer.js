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
        // For searching via the searchbar
        case "FETCH_SEARCHED":
            return {...state,
                searched: action.payload.searched
            }
        // Action for clearing the searched games state
        case "CLEAR_SEARCHED":
            return {...state,
                searched: [],
            }
        default: 
            return {...state}
    }
}

export default gamesReducer