import React from 'react';
import Card from './Card';
import states from './states';
import { branch } from 'baobab-react/higher-order';
import Loading from '../Loading';

const renderStreamer = function(streamer, idx) {
	return (
		<Card
			key={ idx }
			{...streamer}
		/>
	);
};

const Streamers = function({
	loading,
	streamers,
	state,
}) {
	const sortFn = states[state];
	return (
		<section className="streamers">
			{ loading && <Loading /> }
			{ !loading && sortFn(streamers).map(renderStreamer) }
		</section>
	);
};

export default branch({
	loading: ['loading'],
	state: ['state'],
	streamers: ['streamers'],
}, Streamers);