import React, { PropTypes } from 'react';
import Markdown from 'rsg-components/Markdown';

const s = require('./Message.css');

class MessageRenderer extends React.Component {
	render() {
		const { children } = this.props;
		return (
			<div className={s.root}>
				<Markdown text={Array.isArray(children) ? children.join('\n') : children} />
			</div>
		);
	}
}

MessageRenderer.propTypes = {
	children: PropTypes.node.isRequired,
};

export default MessageRenderer;
