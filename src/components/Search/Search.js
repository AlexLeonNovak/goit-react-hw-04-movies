import { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './Search.module.scss';

export class Search extends Component {
	state = {
		query: '',
	};

	componentDidMount() {
		const { defaultQuery } = this.props;
		if (defaultQuery) {
			this.setState({ query: defaultQuery });
		}
	}

	handleInputChange = ({ target }) => {
		this.setState({ query: target.value });
	};

	handleSubmit = e => {
		e.preventDefault();
		this.props.onSearch(this.state.query);
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit} className={styles.Search__form}>
				<input value={this.state.query} onChange={this.handleInputChange} />
				<button type="submit">Search</button>
			</form>
		);
	}
}

Search.defaultProps = {
	defaultQuery: '',
};

Search.propTypes = {
	onSearch: PropTypes.func.isRequired,
	defaultQuery: PropTypes.string,
};
