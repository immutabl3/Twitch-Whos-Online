import React from 'react';
import Input from './Input';
import Button from './Button';

export default function Search() {
	return (
		<nav className="form-group search row">
			<div className="col-10">
				<Input />
			</div>
			<Button />
		</nav>
	);
};