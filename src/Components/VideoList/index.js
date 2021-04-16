import "./styles.css"
import { VideoItem } from "../VideoItem";

export const VideoList = ({ videoFactory }) => (
  <div className="video-list">
    <div>
      <span>Up Next</span>
      <span className="autoplay">autoplay</span>
      {videoFactory.map((video, index) => (
        <VideoItem video={video} key={index} />
      ))}
    </div>
  </div>
);
