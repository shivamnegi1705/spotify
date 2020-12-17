import React from 'react';
import '../css/Login.css';
import { loginUrl } from '../apis/spotify';

const Login = () => {
    return (
        <div className="login">
            <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png" alt="" />

            <a href={loginUrl}>LOGIN WITH SPOTIFY</a> 
        </div>
    )
}

export default Login