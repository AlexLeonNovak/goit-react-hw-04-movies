import { Component } from 'react';
import { fetchCast } from '../../services/movies-api';
import { Loader } from '../Loader';

import styles from './Cast.module.scss';
import { BASE_IMAGE_URL } from '../../constants';
import personImg from '../../assets/img/person.png';

export class Cast extends Component {
	state = {
		casts: [],
		isLoading: false,
		error: null,
	};

	componentDidMount() {
		this.setState({ isLoading: true, error: null });
		const { match } = this.props;
		fetchCast(match.params.movieId)
			.then(casts => {
				console.log(casts);
				this.setState({ casts });
			})
			.catch(error => this.setState({ error }))
			.finally(() => this.setState({ isLoading: false }));
	}

	render() {
		const { casts, isLoading, error } = this.state;
		return (
			<>
				{isLoading && <Loader />}
				{error && <p style={{ color: 'red' }}>{error.message}</p>}
				{casts.length && (
					<ul className={styles.Cast__grid}>
						{casts.map(cast => (
							<li key={cast.id}>
								<img
									src={
										cast.profile_path
											? `${BASE_IMAGE_URL}/w200/${cast.profile_path}`
											: personImg
									}
									alt={cast.name}
								/>
								<p>{cast.name}</p>
							</li>
						))}
					</ul>
				)}
			</>
		);
	}
}
