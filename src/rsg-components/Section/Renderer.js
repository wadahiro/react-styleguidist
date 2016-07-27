import React, { PropTypes } from 'react';

const s = require('./Section.css');

class Renderer extends React.Component {
	render() {
		const { name, content, components } = this.props;

		return (
			<div className={s.root}>
				<header className={s.header}>
					<h1 className={s.heading} id={name}>
						<a className={s.anchor} href={'#' + name}></a>
						{name}
					</h1>
				</header>
				<div>
					{content}
				</div>
				<div>
					{components}
				</div>
			</div>
		);
	}
}

Renderer.propTypes = {
	name: PropTypes.string.isRequired,
	content: PropTypes.array,
	components: PropTypes.object,
};

export default Renderer;
