import { Movies } from '../components/Movies';
import { Component } from 'react';
import { Loader } from '../components/Loader';
import { fetchTrading } from '../services/movies-api';

export class HomePage extends Component {
	state = {
		trends: [],
		isLoading: false,
	};

	componentDidMount() {
		this.setState({ isLoading: true });
		fetchTrading()
			.then(trends => this.setState({ trends }))
			.catch(error => console.log(error))
			.finally(() => this.setState({ isLoading: false }));
	}

	render() {
		const { trends, isLoading } = this.state;

		return (
			<div className="container">
				<h1>Trends</h1>
				{trends.length && <Movies movies={trends} />}
				{isLoading && <Loader />}
			</div>
		);
	}
}
