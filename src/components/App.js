import React, { useEffect} from 'react';
import '../css/App.css';
import { connect } from 'react-redux';
import SpotifyWebApi from "spotify-web-api-js";

// components
import Login from './Login';
import Player from './Player';

import { setToken, setUser, setPlaylists, setDiscoverWeekly } from '../actions';
import { extractAccessToken } from '../apis/spotify';


const spotify = new SpotifyWebApi();

const App = (props) => {

    useEffect(() => {
        const token = extractAccessToken();
        window.location.hash = "";
        props.setToken(token);

        if(token){
            spotify.setAccessToken(token);
            
            spotify.getMe().then( user => {
                props.setUser(user);
            });

            spotify.getUserPlaylists().then(
                (playlists) => {
                    props.setPlaylists(playlists);
                }
            )

            spotify.getPlaylist('37i9dQZEVXcLDfLkI9kj3b').then(
                (response) => {
                    props.setDiscoverWeekly(response);
                }
            )
        }
    },[]);

    if(!props.token){
        return <div><Login /></div>
    }
    return (
        <div>
            <Player spotify={spotify}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {token: state.token};
}

export default connect(mapStateToProps,{
    setToken: setToken,
    setUser: setUser,
    setPlaylists: setPlaylists,
    setDiscoverWeekly: setDiscoverWeekly
})(App);