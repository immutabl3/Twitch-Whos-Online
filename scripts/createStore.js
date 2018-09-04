import Baobab from 'baobab';

export default function createStore() {
	return new Baobab({
		loading: false,
		state: 'all',
		search: '',
		error: '',
		streamers: [],
		usernames: [],
	});
};