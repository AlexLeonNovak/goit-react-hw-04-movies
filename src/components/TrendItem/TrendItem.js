import PropTypes from 'prop-types';
import styles from './TrendItem.module.scss';
import { Link } from 'react-router-dom';

import { routes } from '../../routes';
import { BASE_IMAGE_URL } from '../../constants';

export const TrendItem = ({ id, src, alt, title, date }) => (
	<li className={styles.TrendItem}>
		<Link to={`${routes.movies}/${id}`} className={styles.TrendItem__link}>
			<div className={styles.TrendItem__img_wrapper}>
				<img src={`${BASE_IMAGE_URL}/w300/${src}`} alt={alt} />
			</div>
			<div className={styles.TrendItem__descr}>
				<h3>{title}</h3>
				<p>{date}</p>
			</div>
		</Link>
	</li>
);

TrendItem.propTypes = {
	src: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
};
