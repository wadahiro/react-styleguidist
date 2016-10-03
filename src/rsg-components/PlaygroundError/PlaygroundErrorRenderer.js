import React, { PropTypes } from 'react';

const s = require('./PlaygroundError.css');

class PlaygroundError extends React.Component {
	render() {
		const { message } = this.props;
		return (
			<pre className={s.root}>{message}</pre>
		);
	}
}

PlaygroundError.propTypes = {
	message: PropTypes.string.isRequired,
};

export default PlaygroundError;
