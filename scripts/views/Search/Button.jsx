import React from 'react';
import signal from 'signal-js';

export default function Button() {
	return (
		<div
			className="col-2 search__button"
			onClick={ () => signal.trigger('search:submit') }
		>
			<i className="fa fa-plus text-center" />
		</div>
	);
};