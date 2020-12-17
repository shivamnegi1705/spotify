import React from 'react';
import '../css/Header.css';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';
import { connect } from 'react-redux';


const Header = (props) => {
    return (
        <div className="header">
            
            <div className="header__left">
                <SearchIcon />
                <input placeholder="Search for Artists, Songs or " type="text" />
            </div>

            <div className="header__right">
                <Avatar src={props.user?.images[0]?.url} alt={props.user?.display_name} />
                <h4>{props.user?.display_name}</h4>
            </div>

        </div>
    );
}

const mapStateToProps = (state) => {
    return {user: state.user};
}

export default connect(mapStateToProps)(Header);