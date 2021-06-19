import { Trends } from '../components/Trends';
import { Component } from 'react';
import { Loader } from '../components/Loader';
import { fetchTrading } from '../services/movies-api';

export class HomePage extends Component {
	state = {
		trends: [],
	};

	componentDidMount() {
		fetchTrading().then(trends => this.setState({ trends }));
	}

	render() {
		const { trends } = this.state;

		return <>{trends.length ? <Trends movies={trends} /> : <Loader />}</>;
	}
}
