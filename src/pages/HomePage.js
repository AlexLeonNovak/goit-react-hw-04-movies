import { Trends } from '../components/Trends';
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
			<>
				{trends.length && <Trends movies={trends} />}
				{isLoading && <Loader />}
			</>
		);
	}
}
