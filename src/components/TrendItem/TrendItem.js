import PropTypes from 'prop-types';
import styles from './TrendItem.module.scss';

export const TrendItem = ({ src, alt, title, date }) => (
	<li className={styles.TrendItem}>
		<a href="#" className={styles.TrendItem__link}>
			<div className={styles.TrendItem__img_wrapper}>
				<img src={`https://image.tmdb.org/t/p/w300${src}`} alt={alt} />
			</div>
			<div className={styles.TrendItem__descr}>
				<h3>{title}</h3>
				<p>{date}</p>
			</div>
		</a>
	</li>
);

TrendItem.propTypes = {
	src: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
};
