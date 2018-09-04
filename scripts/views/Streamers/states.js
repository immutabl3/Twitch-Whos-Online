import sortBy from 'lodash/sortBy';

export default {
	all(arr) {
		return sortBy(arr, ({ online }) => !online);
	},
	online(arr) {
		return arr.filter(({ online }) => online);
	},
	offline(arr) {
		return arr.filter(({ online }) => !online);
	},
};