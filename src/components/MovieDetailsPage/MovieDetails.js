import PropTypes from 'prop-types';

import styles from './MovieDetails.module.scss';
import { BASE_IMAGE_URL } from '../../constants';

export const MovieDetails = ({
	title,
	genres,
	overview,
	poster_path,
	date,
}) => (
	<div className={styles.MovieDetails__block}>
		<h1 className={styles.MovieDetails__title}>{title}</h1>
		<div className={styles.MovieDetails__grid}>
			<img
				src={`${BASE_IMAGE_URL}/w500${poster_path}`}
				alt={title}
				className={styles.MovieDetails__posterImg}
			/>
			<div>
				{genres.length && (
					<ul className={styles.MovieDetails__genres}>
						{genres.map(genre => (
							<li className={styles.MovieDetails__genres__item} key={genre.id}>
								{genre.name}
							</li>
						))}
					</ul>
				)}
				<p>{overview}</p>
				<p>Release date: {date}</p>
			</div>
		</div>
	</div>
);

MovieDetails.defaultProps = {
	genres: [],
};

MovieDetails.propTypes = {
	title: PropTypes.string.isRequired,
	genres: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			name: PropTypes.string.isRequired,
		}),
	),
	overview: PropTypes.string.isRequired,
	poster_path: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
};
