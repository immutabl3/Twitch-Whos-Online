import 'babel-polyfill';
import renderer from './renderer';
import createStore from './createStore';
import App from './views/App';
import actions from './actions';
import usernames from './services/usernames';

const mount = document.querySelector('#mount');

const init = async function() {
	const store = createStore();
	renderer(App, store, mount);
	actions(store);

	const list = await usernames.list();
	store.set('usernames', list);
};

init();
