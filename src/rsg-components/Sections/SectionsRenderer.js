import React, { PropTypes } from 'react';

class SectionsRenderer extends React.Component {
	render() {
		const { sections } = this.props;
		return (
			<div>
				{sections}
			</div>
		);
	}
}

SectionsRenderer.propTypes = {
	sections: PropTypes.array.isRequired,
};

export default SectionsRenderer;
