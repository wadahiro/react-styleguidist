import React, { PropTypes } from 'react';
import mapValues from 'lodash/mapValues';
import renderMarkdown from '../../utils/markdown-to-jsx';

import s from './Markdown.css';

// Custom CSS classes for each tag: <em> → <em className={s.em}>.
const overrides = mapValues(s, value => ({
	props: {
		className: value,
	},
}));

// Inline mode: replace <p> (usual root component) with <span>
const overridesInline = {
	...overrides,
	p: {
		component: 'span',
		props: {
			className: s.base,
		},
	},
};

export default class Markdown extends React.Component {
	render() {
		const { text, inline } = this.props;

	    const options = { overrides: inline ? overridesInline : overrides };
	    return renderMarkdown(text, options);
    }
}

Markdown.propTypes = {
	text: PropTypes.string.isRequired,
	inline: PropTypes.bool,
};
