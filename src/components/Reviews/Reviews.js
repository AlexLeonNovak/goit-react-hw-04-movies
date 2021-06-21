import { Component } from 'react';
import { Loader } from '../Loader';
import { fetchReviews } from '../../services/movies-api';

import styles from './Reviews.module.scss';
import personImg from '../../assets/img/person.png';
import { BASE_IMAGE_URL } from '../../constants';

export class Reviews extends Component {
	state = {
		reviews: [],
		isLoading: false,
		error: false,
	};

	componentDidMount() {
		this.setState({ isLoading: true, error: null });
		const { match } = this.props;
		fetchReviews(match.params.movieId)
			.then(reviews => this.setState({ reviews }))
			.catch(error => this.setState({ error }))
			.finally(() => this.setState({ isLoading: false }));
	}

	render() {
		const { reviews, isLoading, error } = this.state;
		return (
			<>
				{isLoading && <Loader />}
				{error && <p style={{ color: 'red' }}>{error.message}</p>}
				{reviews.length > 0 ? (
					<ul>
						{reviews.map(({ id, author_details, author, content }) => {
							let avatar = personImg;
							if (author_details.avatar_path) {
								avatar = author_details.avatar_path.replace(/^\/+/, '');
								if (avatar.indexOf('http') === -1) {
									avatar = `${BASE_IMAGE_URL}/w200/${avatar}`;
								}
							}
							return (
								<li key={id}>
									<img
										src={avatar}
										alt={author}
										align="left"
										className={styles.Review__img}
									/>
									<p>{content}</p>
								</li>
							);
						})}
					</ul>
				) : (
					<p>We don't have any reviews for this movie.</p>
				)}
			</>
		);
	}
}
