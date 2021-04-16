import "./styles.css"
import { UserActions } from "../UserActions";

export const PlayingVideo = ({ playingVideo }) => (
  <div className="video-wrapper">
    <video controls className="video">
      <source src={playingVideo.videoSrc} type="video/mp4" />
      Sorry, your browser doesn't support embedded videos.
    </video>
    <div className="description">
      <div>
        <h1 className="video-title">{playingVideo.videoTitle}</h1>
        <span className="views">{`${playingVideo.videoViews} views`}</span>
        <span className="dot">•</span>
        <span className="date">{playingVideo.videoDate.toDateString()}</span>
      </div>
      <UserActions />
    </div>
  </div>
);
