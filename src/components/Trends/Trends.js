import { Component } from 'react';
import { fetchTrading } from '../../services/movies-api';
import { TrendItem } from '../TrendItem';

export class Trends extends Component {
	state = {
		trends: [],
	};

	componentDidMount() {
		fetchTrading().then(trends => this.setState({ trends }));
	}

	render() {
		return (
			<div className="container">
				<h1>Trends</h1>
				<ul className="grid">
					{this.state.trends.map(
						({
							id,
							original_name,
							title,
							poster_path,
							release_date,
							first_air_date,
						}) => {
							const titleNormalized = title || original_name;
							const date = release_date || first_air_date;
							return (
								<TrendItem
									key={id}
									src={poster_path}
									alt={titleNormalized}
									title={titleNormalized}
									date={date}
								/>
							);
						},
					)}
				</ul>
			</div>
		);
	}
}
