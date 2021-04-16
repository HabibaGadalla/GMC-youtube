import "./App.css";
import {videoFactory} from './util/factory'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faThumbsDown,
  faShare,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  const currentVideoId = 9;
  const findVideo = (id) => {
    return videoFactory.find((video) => video.videoId === id);
  };
  const playingVideo = findVideo(currentVideoId);
  return (
    <div className="App">
      {playingVideo && (
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
              <span className="date">
                {playingVideo.videoDate.toDateString()}
              </span>
            </div>
            <div className="actions">
              <span>
                <FontAwesomeIcon icon={faThumbsUp} /> 1.7 M
              </span>
              <span>
                <FontAwesomeIcon icon={faThumbsDown} />
                200
              </span>
              <span>
                <FontAwesomeIcon icon={faShare} />
                Share
              </span>
              <span>
                <FontAwesomeIcon icon={faPlus} />
                Save
              </span>
            </div>
          </div>
        </div>
      )}
      <div className="video-list">
        <div className="next">
          <span className="next-title">Up Next</span>
          <span className="autoplay">autoplay</span>
          {videoFactory.map((video) => {
            const {
              videoTitle,
              videoId,
              videoThumbnail,
              videoViews,
              videoArtist,
            } = video;
            return (
              <div className="thumbnail-wrapper" key={videoId}>
                <img
                  className="thumbnail"
                  alt={videoArtist}
                  src={videoThumbnail}
                />
                <div className="details">
                  <h2 className="thumbnail-title">{videoTitle}</h2>
                  <span className="thumbnail-artist">{videoArtist}</span>
                  <span className="thumbnail-views">
                    {" "}
                    {`${videoViews} views`}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
