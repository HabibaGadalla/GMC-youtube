import "./styles.css"
export const VideoItem = ({ video }) => {
  const {
    videoId,
    videoArtist,
    videoThumbnail,
    videoTitle,
    videoViews,
  } = video;
  return (
    <div className="thumbnail-wrapper" key={videoId}>
      <img className="thumbnail" alt={videoArtist} src={videoThumbnail} />
      <div className="details">
        <h2 className="thumbnail-title">{videoTitle}</h2>
        <span className="thumbnail-artist">{videoArtist}</span>
        <span className="thumbnail-views"> {`${videoViews} views`}</span>
      </div>
    </div>
  );
};
