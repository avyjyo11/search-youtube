import React from "react";

function VideoDetail({ video }) {
  if (!video) {
    return <div></div>;
  }
  const videoUrl = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div className="ui embed">
        <iframe
          src={videoUrl}
          frameborder="0"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div className="ui segment">
        <div className="ui header">{video.snippet.title}</div>
        <div className="ui description">{video.snippet.description}</div>
      </div>
    </div>
  );
}

export default VideoDetail;
