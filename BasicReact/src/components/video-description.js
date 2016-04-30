import React from 'react';

const VideoDescription= (props) => {

	if(!props.video) {
		return <div>Loading...</div>;
	}
	const id = props.video.id.videoId;
	const url = 'https://youtube.com/embed/' + id;

	return (
		<div>
			<div>
				<iframe src={ url }></iframe>
			</div>
			<span>{ props.video.snippet.title }</span>
		</div>
	);
};

export default VideoDescription;