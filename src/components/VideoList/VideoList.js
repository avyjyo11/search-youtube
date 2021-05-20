import React from "react";

import "./VideoList.css";

export function VideoItem({ video, onSelect }) {
  return (
    <div className="item video-item" onClick={() => onSelect(video)}>
      <img
        className="ui image"
        alt={video.snippet.title}
        src={video.snippet.thumbnails.medium.url}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
}

export function VideoList({ videos, ...rest }) {
  return (
    <div className="ui list relaxed">
      {videos.map((video) => (
        <VideoItem key={video.etag} video={video} {...rest} />
      ))}
    </div>
  );
}

export default VideoList;
