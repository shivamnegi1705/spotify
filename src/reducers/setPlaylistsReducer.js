const setPlaylistsReducer = (state = null,action) => {

    switch(action.type) {
        case 'SET_PLAYLISTS':
            return action.payload;
        default:
            return state;
    }
}

export default setPlaylistsReducer;