import React ,{useState} from 'react';
import "./Header.css";  //for styling to header section
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar } from '@mui/material'; //for user profile icon
import {Link} from "react-router-dom";
// es7 snippet used easily (rfce);
function Header() {
    const [inputSearch,setInputSearch]=useState(""); //as hooks must be written first at top of functions

    return (
        <div className="header">
            <div className="header__left">
                <MenuIcon/>

                {/* now creating link tag that change the url(go to home page) on clicking the image below */}
                <Link to="/">
                <img className="header__logo" src="https://cdn.pixabay.com/photo/2015/04/13/17/45/icon-720944_1280.png" alt=""/>
                </Link>

            </div>
            
            <div className="header__input">
                <input 
                onChange={(e)=>setInputSearch(e.target.value)} 
                value={inputSearch}
                placeholder="Type-Hit-Search" 
                type="text"/>
                <Link to={`/search/${inputSearch}`}>
                <SearchIcon className="header__inputButton"/>
                </Link>
            </div>
            
            <div className="header__icons">
                <VideoCallIcon className="header__icon"/>
                <AppsIcon className="header__icon"/>
                <NotificationsIcon className="header__icon"/>
                <Avatar alt="user_pic" src="https://avatars.githubusercontent.com/u/59445236?v=4"/>
            </div>
    
        </div>
    )
}
 
export default Header
