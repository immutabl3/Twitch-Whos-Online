import React from 'react';
import classnames from 'classnames';

export default function Card({
	online,
	link,
	name,
	logo,
	game,
}) {
	return (
		<a href={ link } target="_blank">
			<div
				className={
					classnames(
						'container-fluid card',
						{
							cards: online,
							'card--online': online,
							'card--offline': !online,
						}
					)
				}
			>
				<div className="row online">
					<div className="col-3 card__vcenter">
						<img
							src={ logo }
							className="card__logo"
						/>
					</div>
					<div className="col-9">
						<h2 className="upper text-center">
							{ name }
						</h2>
						<br />
						<p className="status">
							{ !online ? <i>Offline</i> : `Playing ${game}` }
						</p>
					</div>
				</div>
			</div>
		</a>
	);
};