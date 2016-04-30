import React from 'react';

const VideoItem = ({ video, onVideoSelect }) => {
	return <li onClick = { () => onVideoSelect(video) }>
				<img src= {video.snippet.thumbnails.default.url}/>
				<span>{video.snippet.title}</span>
		   </li>;
};

export default VideoItem; 