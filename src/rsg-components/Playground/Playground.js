import React, { Component, PropTypes } from 'react';
import PlaygroundRenderer from 'rsg-components/Playground/PlaygroundRenderer';

export default class Playground extends Component {
	static propTypes = {
		code: PropTypes.string.isRequired,
		evalInContext: PropTypes.func.isRequired,
	};
	static contextTypes = {
		config: PropTypes.object.isRequired,
	};

	constructor(props, context) {
		super(props, context);
		const { code } = props;
		const { showCode } = context.config;
		this.state = {
			code,
			showCode,
		};
	}

	componentWillReceiveProps(nextProps) {
		let { code } = nextProps;
		if (code) {
			this.setState({
				code,
			});
		}
	}

	handleChange(code) {
		this.setState({
			code,
		});
	}

	handleCodeToggle() {
		this.setState({
			showCode: !this.state.showCode,
		});
	}

	render() {
		const { code, showCode } = this.state;
		const { evalInContext } = this.props;
		return (
			<PlaygroundRenderer
				code={code}
				showCode={showCode}
				evalInContext={evalInContext}
				onChange={code => this.handleChange(code)}
				onCodeToggle={() => this.handleCodeToggle()}
			/>
		);
	}
}
