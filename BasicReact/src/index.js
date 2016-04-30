import React, {Component} from 'react'; //ES6 way to import
import ReactDOM from 'react-dom'; //React is now devided into 2 library and Reactdom is used for DOM rendering
import _ from 'lodash';
import SearchBar from './components/search'
import VideoList from './components/video-list'
import YTSearch from 'youtube-api-search'
import VideoDescription from './components/video-description'

const API_KEY = 'AIzaSyD3W_eSpDpsyaMxEF5LHwXFygv9TM3yRHs';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = { videos: [], selectedVideo: null };
		this.videoSearch('Game of thrones');

	}

	videoSearch(term) {
		YTSearch({ key: API_KEY, term: term }, (videos) => {
			this.setState({videos: videos, selectedVideo: videos[0]});
		});
	}

	render() {
		const videoSearch = _.debounce((term) => this.videoSearch(term), 300);

		return (
			<div>
				<SearchBar onSearchChange = { videoSearch } />
				<VideoDescription video= { this.state.selectedVideo } />
				<VideoList onVideoSelect = { (selectedVideo) => this.setState({selectedVideo: selectedVideo}) } videos={this.state.videos} />
			</div>
		);
	}
}

// //const cannot be changed later
// const App =  () => { //ES6 way to declare function
// 	return (
// 				<div>
// 					<SearchBar/>
// 					<VideoList />
// 				</div>
// 			); //This is JSX Syntax, JSX brings XML like syntax in React which is easy to understand
// 	//We can write plain JS also (Check Babel site to convert JSX into JS)
// }

ReactDOM.render(<App/>, document.querySelector('.container')); // 2nd parameter is target and first in component.
//<App/> is JSX way to create an element