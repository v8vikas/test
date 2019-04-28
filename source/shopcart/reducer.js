const initialState = {
	articles: []
};

// Redux calls this function upon every dispatch since it is included in `../reducer.js`
// `state` is the current state
// `action` is what was dispatched
// It returns the new state for this reducer
export default (state = initialState, action) => {
	switch (action.type) {
		// When action type `SHOPCART_FETCHED` has been dispatched
		case 'SHOPCART_FETCHED': {
			return {
				...state, // Append the current state
				articles: action.payload.articles // Then overwrite the `articles` key in the state with the payload
			};
		}
		// If the action has not been caught, return the current state
		default: {
			return state;
		}
	}
};
