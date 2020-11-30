import React from 'react';
import './Widgets.css'
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from '@material-ui/icons/Search';

const Widgets = () => {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon"/>
                <input placeholder="Search__twitter" type="text"/>
            </div>

            <div className="widgets__widgetContainer">
                <h2>What's happening</h2>

                <TwitterTweetEmbed tweetId={"835329474266824704"} />

                <TwitterTimelineEmbed 
                sourceType="profile"
                screenName="dev_shohag"
                option={{ height:400 }}
                />

                <TwitterShareButton 
                url={"https://www.facebook.com/shohag.symon.5/"}
                options={{ text:"Reactjs is awesome", via:"shohag"}}
                />

            </div>
        </div>
    );
};

export default Widgets;