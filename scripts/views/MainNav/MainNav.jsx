import React from 'react';
import MainNavLink from './MainNavLink';

const links = [
	'online',
	'all',
	'offline'
];

const renderMainNavLink = function(name) {
	return (
		<MainNavLink
			key={ name }
			name={ name }
		/>
	);
};

export default function MainNav() {
	return (
		<nav className="sort row main-nav">
			{ links.map(renderMainNavLink) }
		</nav>
	);
};