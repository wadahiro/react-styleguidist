import React from 'react';
import Layout from 'rsg-components/Layout';
import Renderer from 'rsg-components/Layout/Renderer';

export default class StyleGuide extends React.Component {
	render() {
		const LayoutRenderer = Layout(Renderer);

		return (
			<LayoutRenderer {...this.props} />
		);
	}
}