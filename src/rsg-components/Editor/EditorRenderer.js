import React, { PropTypes } from 'react';

import s from './Editor.css';

class EditorRenderer extends React.Component {
	render() {
		const { children } = this.props;
		return (
			<div className={s.root}>
				{children}
			</div>
		);
	}
}

EditorRenderer.propTypes = {
	children: PropTypes.node.isRequired,
};

export default EditorRenderer;
