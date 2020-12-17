import React from 'react';
import '../css/Body.css';
import Header from './Header';
import SongRow from './SongRow';
import { connect } from 'react-redux';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const Body = (props) => {
    return (
        <div className="body">
            <Header />

            <div className="body__info">
                <img src={props.weekly?.images[0].url} alt="" />
                <div className="body__infoText">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>{props.weekly?.description}</p>
                </div>
            </div>

            <div className="body__songs">
                <div className="body__icons">
                    <PlayCircleFilledIcon className="body__shuffle" />
                    <FavoriteIcon fontSize="large" />
                    <MoreHorizIcon />
                </div>
            </div>  

                {/* List of songs */}
                {
                    props.weekly?.tracks.items.map(
                        (item,idx) => {
                            // console.log(item.track.artists[0].name);
                            return <SongRow key={idx} track={item.track} />
                        }
                    )
                }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {weekly: state.weekly};
}
export default connect(mapStateToProps)(Body);