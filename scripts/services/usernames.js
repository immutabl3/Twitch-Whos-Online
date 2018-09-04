import usernames from './usernames.json';

export default {
	list() {
		return JSON.parse(localStorage.getItem('usernames')) || usernames;
	},
	save(arr) {
		localStorage.setItem('usernames', JSON.stringify(arr));
	},
};