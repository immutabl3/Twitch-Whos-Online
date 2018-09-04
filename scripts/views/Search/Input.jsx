import React from 'react';
import signal from 'signal-js';
import { branch } from 'baobab-react/higher-order';

const onKeyUp = e => {
	if (e.key !== 'Enter') return;
	signal.trigger('search:submit');
};

const onChange = e => {
	signal.trigger('search:change', e);
};

const Input = function({ value }) {
	return (
		<input
			className="form-control search__bar"
			placeholder="Add a streamer..."
			type="text"
			value={ value }
			onKeyUp={ onKeyUp }
			onChange={ onChange }
		/>
	);
};

export default branch({
	value: ['search'],
}, Input);