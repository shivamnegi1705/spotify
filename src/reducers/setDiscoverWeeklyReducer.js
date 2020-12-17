const setDiscoverWeeklyReducer = (state = null,action) => {

    switch(action.type) {
        case 'SET_DISCOVER_WEEKLY':
            return action.payload;
        default:
            return state;
    }
}

export default setDiscoverWeeklyReducer;