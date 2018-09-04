import request from 'superagent';

const noop = () => {};

const CLIENT_ID = '8yiglzu05taulkg1gdg9co5viztolv';
const createStreamsURL = name => `https://api.twitch.tv/kraken/streams/${name}?client_id=${CLIENT_ID}`;
const createChannelsURL = name => `https://api.twitch.tv/kraken/channels/${name}?client_id=${CLIENT_ID}`;
const defaultLogoUrl = 'https://static-cdn.jtvnw.net/jtv_user_pictures/xarth/404_user_600x600.png';

const getUser = async function(username) {
	const streamsURL = createStreamsURL(username);
	const channelsURL = createChannelsURL(username);
	const [
		data1,
		data2
	] = await Promise.all([
		request.get(streamsURL).then(res => res.body),
		request.get(channelsURL).then(res => res.body)
	]);
	
	const online = data1.stream !== null;
	const logo = data2.logo === null ? defaultLogoUrl : data2.logo;
	const name = data2.display_name;
	const game = data2.game;
	const link = data2.url;
	
	return {
		logo,
		name,
		game,
		link,
		online,
	};
};

export default {
	async getAll(usernames) {
		const results = await Promise.all(
			usernames.map(function(username) {
				return getUser(username)
					// if there's an error,
					// return nothing!
					.catch(noop);
			})
		);

		// if we errored, filter the errors out
		return results.filter(Boolean);
	}
};