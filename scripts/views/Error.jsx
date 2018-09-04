import React from 'react';
import { branch } from 'baobab-react/higher-order';

const Error = function({ error }) {
	return (
		<div className="error">
			{ error }
		</div>
	);
};

export default branch({
	error: ['error'],
}, Error);