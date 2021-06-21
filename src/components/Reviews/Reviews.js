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
		isError: false,
	};

	componentDidMount() {
		this.setState({ isLoading: true });
		const { match } = this.props;
		fetchReviews(match.params.movieId)
			.then(reviews => this.setState({ reviews }))
			.catch(error => this.setState({ isError: true }))
			.finally(() => this.setState({ isLoading: false }));
	}

	render() {
		const { reviews, isLoading } = this.state;
		return (
			<>
				{isLoading && <Loader />}
				{reviews.length && (
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
									{/*<div className={styles.Review__img_wrapper}>*/}
									<img
										src={avatar}
										alt={author}
										align="left"
										className={styles.Review__img}
									/>
									{/*</div>*/}
									<p>{content}</p>
								</li>
							);
						})}
					</ul>
				)}
			</>
		);
	}
}
