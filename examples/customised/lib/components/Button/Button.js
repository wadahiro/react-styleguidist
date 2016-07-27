import React, { Component, PropTypes } from 'react';

import s from './Button.css';

/**
 * The only true button.
 */
export default class Button extends React.Component {
	render() {
		const {
			color,
			size,
			children,
		} = this.props;

		let styles = {
			color: color,
			fontSize: Button.sizes[size]
		};

		return (
			<button className={s.root} style={styles}>{children}</button>
		);
	}
}
Button.propTypes = {
	/**
	 * Button label.
	 */
	children: PropTypes.string.isRequired,
	color: PropTypes.string,
	size: PropTypes.oneOf(['small', 'normal', 'large']),
};
Button.defaultProps = {
	color: '#333',
	size: 'normal'
};
Button.sizes = {
	small: '10px',
	normal: '14px',
	large: '18px'
};
