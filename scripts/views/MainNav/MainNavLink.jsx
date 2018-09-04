import React from 'react';
import classnames from 'classnames';
import signal from 'signal-js';
import { branch } from 'baobab-react/higher-order';

const MainNavLink = function({ name, state }) {
	return (
		<div
			onClick={ () => signal.trigger('state:change', name) }
			className={
				classnames(
					'col-4 upper main-nav__link',
					`main-nav__link--${name}`,
					{
						'main-nav__link--active': state === name,
					}
				)
			}
		>
			<p className="main-nav__text">
				{ name }
			</p>
		</div>
	);
};

export default branch({
	state: ['state'],
}, MainNavLink);