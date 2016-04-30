import React, { Component } from 'react';

//Class bases component


class SearchBar extends Component {

	constructor(props) {
		super(props);

		//Only in constructor we use this.state, else we will use this.setState
		//to set the value of state
		//However, we can use this.state.term to get the value of state
		this.state = { term: '' };
	}

	render() {
		return <div>
					<input 
					//This way state will decide the value of input not the input
					value = {this.state.value} 
					onChange = { (evt) => this.onInputChange(evt.target.value) }/>
					Value of Input: {this.state.term}
				</div>;
	}

	onInputChange(term) {
		this.setState({term: term});
		this.props.onSearchChange(term);
	}

	// onChange(evt){
	// 	console.log(evt.target.value);
	// }
}

//Functional component
// const SearchBar = () => {
// 	return <input/>;
// };

//State is plain JavaScript object
//It will record the event 

//Funcational component does not have state
//Every class component has its own state
//If state changes then render will be called and also it's children

export default SearchBar;