import React from 'react'
import "../styles/sidebar.css"
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import SettingsIcon from '@material-ui/icons/Settings';
import FlagIcon from '@material-ui/icons/Flag';
import HelpIcon from '@material-ui/icons/Help';
import RateReviewIcon from '@material-ui/icons/RateReview';


function Sidebar() {
    return (
        <div className="Sidebar">
            <div className="logo-section">
                <MenuIcon className="icon"/>
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"/>
            </div>
            <div className="section primary">
                <div className="sub-section home">
                    <HomeIcon className="icon"/>
                    <span>Home</span>
                </div>
                <div className="sub-section">
                    <ExploreIcon className="icon"/>
                    <span>Explore</span>
                </div>
                <div className="sub-section">
                    <SubscriptionsIcon className="icon"/>
                    <span>Subscriptions</span>
                </div>
            </div>
            <div className="section secondary">
                <div className="sub-section">
                    <VideoLibraryIcon className="icon"/>
                    <span>Library</span>
                </div>
                <div className="sub-section">
                    <HistoryIcon className="icon"/>
                    <span>History</span>
                </div>
                <div className="sub-section">
                    <ThumbUpIcon className="icon"/>
                    <span>Liked videos</span>
                </div>
                <div className="sub-section">
                    <WatchLaterIcon className="icon"/>
                    <span>Watch later</span>
                </div>
            </div>
            <div className="section">
                <div className="sub-section">
                    <SettingsIcon/>
                    <span>Settings</span>
                </div>
                <div className="sub-section">
                    <FlagIcon/>
                    <span>Report</span>
                </div>
                <div className="sub-section">
                    <HelpIcon/>
                    <span>Help</span>
                </div>
                <div className="sub-section">
                    <RateReviewIcon/>
                    <span>Feedback</span>
                </div>
            </div>
            <div className="section">
                <div className="footer">
                    <span>
                        About Press Copyright<br></br>
                        Contact Us Creators<br></br>
                        Advertise Developers<br></br><br></br>
                        Term Privacy Policy & Safety<br></br>
                        How YouTube Works<br></br>
                        Test New Features
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
