import React, { PropTypes } from 'react';

class ComponentsRenderer extends React.Component {
	render() {
		const { components, sections } = this.props;
		return (
			<div>
				{components}
				{sections}
			</div>
		);
	}
}

ComponentsRenderer.propTypes = {
	components: PropTypes.array.isRequired,
	sections: PropTypes.node.isRequired,
};

export default ComponentsRenderer;
