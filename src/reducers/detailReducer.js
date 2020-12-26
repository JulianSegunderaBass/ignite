// Reducer holding the game details data

// The initial state for the reducer
const initialState = {
    game: {},
    screen: {},
    isLoading: true,
}

const detailReducer = (state=initialState, action) => {
    // Switch statement to check different actions
    switch(action.type) {
        case "GET_DETAIL":
            // Returns all of the state
            // Second parameter updates the specific details state
            return {...state,
                game: action.payload.game,
                screen: action.payload.screen,
                // When we fetch the data, set loading to false
                isLoading: false
            }
        case "LOADING_DETAIL":
            return {
                ...state,
                isLoading: true
            }
        default:
            return {...state}
    }
}

export default detailReducer;