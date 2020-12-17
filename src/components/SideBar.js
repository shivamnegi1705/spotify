import React from 'react';
import '../css/SideBar.css';
import SidebarOption from './SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { connect } from 'react-redux';

const SideBar = (props) => {
    
    return (
        <div className="sidebar">
            <img className="sidebar__logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="" />
            <SidebarOption Icon={HomeIcon} title="Home" />
            <SidebarOption Icon={SearchIcon} title="Search" />
            <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />
            
            <br />
            <strong className="sidebar__title">PLAYLISTS</strong>
            <hr />
            <SidebarOption title="Hip Hop" />

            {
                props.playlists?.items?.map((playlist,idx) => {
                    return <SidebarOption title={playlist.name} key={idx} />
                })
            }

        </div>
    )
}

const mapStateToProps = (state) => {
    return {playlists: state.playlists};
}

export default connect(mapStateToProps)(SideBar);