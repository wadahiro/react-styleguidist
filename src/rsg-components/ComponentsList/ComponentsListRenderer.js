import React, { PropTypes } from 'react';
import cx from 'classnames';

import s from './ComponentsList.css';

class ComponentsListRenderer extends React.Component {
	render() {
		const { items } = this.props;
		return (
			<div className={s.list}>
				{items.map(({ heading, name, content }) => (
					<div className={s.item} key={name}>
						<a className={cx(s.link, heading && s.heading)} href={'#' + name}>{name}</a>
						{content}
					</div>
				))}
			</div>
		);
	}
}

ComponentsListRenderer.propTypes = {
	items: PropTypes.array.isRequired,
};

export default ComponentsListRenderer;
