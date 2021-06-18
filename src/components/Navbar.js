import React from 'react'
import "../styles/navbar.css"
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import MicIcon from '@material-ui/icons/Mic';

function Navbar() {
    return (
        <div className="navbar">
            
            <form>
                <input autoFocus type="search" placeholder="Search"/>
                <button><SearchIcon/></button>
                <MicIcon className="iconsNav" style={{transition:"450ms",fontSize:20,margin:10,color:"#606060"}}/>
            </form>
            <div className="icons">
                <VideoCallIcon className="iconsNav" style={{transition:"450ms"}}/>
                <AppsIcon className="iconsNav" style={{transition:"450ms"}}/>
                <NotificationsIcon className="iconsNav" style={{transition:"450ms"}}/>
                <AccountBoxIcon className="iconsNav" style={{transition:"450ms"}}/>
            </div>
        </div>
    )
}

export default Navbar
