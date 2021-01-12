import React from 'react';
import '../Css/Header.css';
// icon from material ui
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Header() {
    return (
        <div className ="header">

            <div className="header__left">
                <img src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo-500x350.png" alt="facebook"></img>
                <div className="header__input">
                    <SearchIcon />
                    <input type="text" placeholder="Search Facebook" />
                </div>
            </div>

            <div className="header__middle">
                <div className="header__option header__option--active">
                    <HomeIcon fontSize="large" />
                </div>
                <div className="header__option">
                    <FlagIcon fontSize="large" />
                </div>
                <div className="header__option">
                    <SubscriptionsIcon fontSize="large"/>
                </div>
                <div className="header__option">
                    <StorefrontIcon fontSize="large"/>
                </div>
                <div className="header__option">
                    <SupervisedUserCircleIcon fontSize="large"/>
                </div>
            </div>

            <div className="header__right">
                <div className="header__info">
                    <Avatar />
                    <h4>Abhiram</h4>
                </div>
                {/* use icon button component wrap that around the icon */}
                <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <ForumIcon />
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default Header;
