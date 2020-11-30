import { Avatar, Button } from '@material-ui/core';
import React, { useState } from 'react';
import "./TweetBox.css";
import logo from "./images/logo/Facebook.png"
import db from './firebase';


const TweetBox = () => {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = (e) => {
        e.preventDefault();

        db.collection("posts").add({
            displayName:"Md Shohag",
            username:"dev_shohag",
            verified:true,
            text:tweetMessage,
            image:tweetImage,
            avatar:"https://th.bing.com/th/id/OIP.De2tJhmR2Igeo2zhoaXsJQHaHa?pid=Api&rs=1"
        });
        setTweetImage("");
        setTweetImage("");
    };
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src={logo}/>
                    <input 
                    onChange={e => setTweetMessage(e.target.value)}
                    value={tweetMessage}
                    placeholder="What's Happening?" 
                    type="text"
                    />
                </div>
                <input
                onChange={ e => setTweetImage(e.target.value)} 
                value={tweetImage}
                className="tweetBox__imageInput"
                placeholder="Enter Image URL" 
                type="text"/>
                <Button onClick={sendTweet} type="submit" className="tweetBox__tweetButton" >Tweet</Button>
            </form>
        </div>
    );
};

export default TweetBox;