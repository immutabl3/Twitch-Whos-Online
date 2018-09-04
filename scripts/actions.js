import signal from 'signal-js';
import user from './services/user';
import usernames from './services/usernames';

export default function actions(store) {
	// anytime the usernames change, update the streamers
	store.select('usernames')
		.on('update', async function() {
			store.set('loading', true);

			usernames.save(store.get('usernames'));
			const streamers = await user.getAll(store.get('usernames'));
			store.set('streamers', streamers);
			store.set('loading', false);
		});

	signal.on('state:change', state => {
		store.set('state', state);
	});

	signal.on('search:change', e => {
		const { value } = e.target;
		store.set('search', value);
		store.set('error', '');
	});

	signal.on('search:submit', () => {
		const username = store.get('search');
		
		// they haven't typed anything
		if (!username) return store.set('error', 'Add a username');

		store.push('usernames', username);
		store.set('search', '');
	});
};