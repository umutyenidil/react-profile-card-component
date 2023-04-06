import FacebookLogoSvg from "../SvgIcons/FacebookLogoSvg";
import HeartSvg from "../SvgIcons/HeartSvg";
import InstagramLogoSvg from "../SvgIcons/InstagramLogoSvg";
import MessageSvg from "../SvgIcons/MessageSvg";
import ShareSvg from "../SvgIcons/ShareSvg";
import TwitterLogoSvg from "../SvgIcons/TwitterLogoSvg";
import YoutubeLogoSvg from "../SvgIcons/YoutubeLogoSvg";
import "./ProfileCard.css";
import React from "react";

const ProfileCard = (props) => {
  let profileImage =
    "https://media.licdn.com/dms/image/C4D03AQHgUF1sevLsaw/profile-displayphoto-shrink_400_400/0/1653405593036?e=1686182400&v=beta&t=xUMdTucbkHFkFHdYNesDVKXvyX7jT5RhofKZk4V1Jfo";
  let name = "Umut Yenidil";
  let job = "Student";
  return (
    <div className="profile-card">
      <div className="image">
        <img src={profileImage} alt="profile" className="profile-img" />
      </div>
      <div className="text-data">
        <span className="name">{name}</span>
        <span className="job">{job}</span>
      </div>
      <div className="media-buttons">
        <a
          href="https://www.google.com"
          className="link"
          style={{ backgroundColor: "#4762b7" }}
        >
          <FacebookLogoSvg color="white" />
        </a>
        <a
          href="https://www.google.com"
          className="link"
          style={{ backgroundColor: "#1da1f2" }}
        >
          <TwitterLogoSvg color="white" />
        </a>
        <a
          href="https://www.google.com"
          className="link"
          style={{ backgroundColor: "#e1306c" }}
        >
          <InstagramLogoSvg color="#fff" />
        </a>
        <a
          href="https://www.google.com"
          className="link"
          style={{ backgroundColor: "#ff0000" }}
        >
          <YoutubeLogoSvg color="white" />
        </a>
      </div>

      <div className="buttons">
        <button className="button">Subscribe</button>
        <button className="button">Message</button>
      </div>

      <div className="analytics">
        <div className="data">
          <HeartSvg />
          <span className="number">60k</span>
        </div>
        <div className="data">
          <MessageSvg />
          <span className="number">60k</span>
        </div>
        <div className="data">
          <ShareSvg />
          <span className="number">60k</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
