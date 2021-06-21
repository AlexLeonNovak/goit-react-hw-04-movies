import PropTypes from 'prop-types';
import { MovieItem } from '../MovieItem';

export const Movies = ({ movies }) => (
	<ul className="grid">
		{movies.map(
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
					<MovieItem
						key={id}
						id={id}
						src={poster_path}
						alt={titleNormalized}
						title={titleNormalized}
						date={date}
					/>
				);
			},
		)}
	</ul>
);

Movies.defaultProps = {
	movies: [],
};

Movies.propTypes = {
	movies: PropTypes.array,
};
