import { Movies } from '../components/Movies';
import { Component } from 'react';
import { Loader } from '../components/Loader';
import { fetchTrading } from '../services/movies-api';

export class HomePage extends Component {
	state = {
		trends: [],
		isLoading: false,
		error: null,
	};

	componentDidMount() {
		this.setState({ isLoading: true, error: null });
		fetchTrading()
			.then(trends => this.setState({ trends }))
			.catch(error => this.setState({ error }))
			.finally(() => this.setState({ isLoading: false }));
	}

	render() {
		const { trends, isLoading, error } = this.state;

		return (
			<div className="container">
				<h1>Trends</h1>
				{error && <p style={{ color: 'red' }}>{error.message}</p>}
				{trends.length && <Movies movies={trends} />}
				{isLoading && <Loader />}
			</div>
		);
	}
}
