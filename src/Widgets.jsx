import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets-input">
        <SearchIcon className="widgets-searchIcon" />
        <input type="text" placeholder="Search Twitter" />
      </div>
      <div className="widgets-widgetContainer">
        <h2>What's Happening?</h2>
        <TwitterTweetEmbed tweetId={"1292172659535556608"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="phabosamra20551"
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={"https://twitter.com/phabosamra20551"}
          options={{ text: "#reactjs is awesome", via: "phabosamra20551" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
