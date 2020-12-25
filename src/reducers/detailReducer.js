// Reducer holding the game details data

// The initial state for the reducer
const initialState = {
    game: {},
    screen: {}
}

const detailReducer = (state=initialState, action) => {
    // Switch statement to check different actions
    switch(action.type) {
        case "GET_DETAIL":
            // Returns all of the state
            // Second parameter updates the specific details state
            return {...state,
                game: action.payload.game,
                screen: action.payload.screen
            }
        default:
            return {...state}
    }
}

export default detailReducer;