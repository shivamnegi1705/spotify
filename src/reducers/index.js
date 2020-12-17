import { combineReducers } from 'redux';
import setUserReducer from './setUserReducer';
import setTokenReducer from './setTokenReducer';
import setPlaylistsReducer from './setPlaylistsReducer';
import setDiscoverWeeklyReducer from './setDiscoverWeeklyReducer';

export default combineReducers({
    user: setUserReducer,
    token: setTokenReducer,
    playlists: setPlaylistsReducer,
    weekly: setDiscoverWeeklyReducer
});