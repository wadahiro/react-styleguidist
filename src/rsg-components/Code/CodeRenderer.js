import React, { PropTypes } from 'react';
import cx from 'classnames';

import s from '../Markdown/Markdown.css';

class CodeRenderer extends React.Component {
	render() {
		const { className, children } = this.props;
		return (
			<code className={cx(s.code, className)}>{children}</code>
		);
	}
}

CodeRenderer.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node,
};

export default CodeRenderer;
