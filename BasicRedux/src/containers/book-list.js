import React, { Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectBook } from '../actions/index';

class BookList extends Component {
	renderList() {
		return this.props.books.map((book) => {
			return (
				<li 
					onClick={() => this.props.selectBook(book) } 
					key={book.title}>
					{book.title}
				</li>
			);
		});
	}

	render() {
		return (
			<ul>
				{ this.renderList() }
			</ul>
		);
	}
}

function mapStateToProps (state) {
	return {
		books: state.books
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ selectBook: selectBook }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);