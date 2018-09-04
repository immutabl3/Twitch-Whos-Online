import React from 'react';
import MainNav from './MainNav/MainNav';
import Header from './Header';
import Search from './Search/Search';
import Streamers from './Streamers/Streamers';
import Error from './Error';

export default function App() {
	return (
		<div>
			<Header />
			<MainNav />
			<Search />
			<Error />
			<Streamers />
		</div>
	);
};