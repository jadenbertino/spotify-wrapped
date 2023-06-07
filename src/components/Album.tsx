import React from 'react';
import albusta from '../assets/albusta.jpeg';

const Cover: React.FC = () => {
	return (
		<div
			style={{
				width: 500,
				height: 500,
			}}
		></div>
	);
};

export const Album: React.FC = () => {
	return <img src={albusta} />;
};
