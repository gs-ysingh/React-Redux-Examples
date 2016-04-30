import React from 'react'
import VideoListItem from './video-item'

const VideoList = (props) => {
	const videoItem = props.videos.map((video) => {
		return (<VideoListItem  
					onVideoSelect = { props.onVideoSelect }
					key={video.etag} video={video}/>);
	});

	return (
		<div>
			<ul>
				{ videoItem }
			</ul>
		</div>		
	);
};

export default VideoList;