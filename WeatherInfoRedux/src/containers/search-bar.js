import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = {'term': ''};

		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(evt) {
		this.setState({'term': evt.target.value});
		console.log(this.state.term);
	}

	onFormSubmit(evt){
		evt.preventDefault();
		this.props.fetchWeather(this.state.term);
		this.setState({'term': ''});
	}

	render() {
		return (
			<div>
				<form onSubmit={this.onFormSubmit}>
					<input 
						onChange = { this.onInputChange }
						placeholder = "Enter the city"/>
					<button>Search</button>
				</form>
			</div>
		);
	}
}

function mapPropsToDispatch (dispatch) {
	return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapPropsToDispatch)(SearchBar);