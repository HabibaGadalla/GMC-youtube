import "./App.css";

import { PlayingVideo, VideoList } from "./Components";

import { videoFactory } from "./util/factory";

function App() {
  const currentVideoId = 9;
  const findVideo = (id) => {
    return videoFactory.find((video) => video.videoId === id);
  };
  const playingVideo = findVideo(currentVideoId);
  return (
    <div className="App">
      {playingVideo && <PlayingVideo playingVideo={playingVideo} />}
      <VideoList videoFactory={videoFactory} />
    </div>
  );
}

export default App;
