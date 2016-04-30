//Reducers change the state based on action

export default function (state = null, action) {
	if(action.type == 'BOOK_SELECTED') {
		return action.payload;
	}
	return state;
}