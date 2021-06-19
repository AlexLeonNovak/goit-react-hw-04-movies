import PropTypes from 'prop-types';
import { TrendItem } from '../TrendItem';

export const Trends = ({ movies }) => (
	<div className="container">
		<h1>Trends</h1>
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
						<TrendItem
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
	</div>
);

Trends.defaultProps = {
	movies: [],
};

Trends.propTypes = {
	movies: PropTypes.array,
};
