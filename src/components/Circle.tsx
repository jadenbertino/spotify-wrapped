import React from 'react';

export const Circle: React.FC<{
	children?: React.ReactNode;
	diameter: number;
	style?: React.CSSProperties;
}> = ({
	children,
	diameter,
	style,
}) => {
	return (
		<div
			style={{
				width: diameter + 'px',
				height: diameter + 'px',
				borderRadius: diameter / 2 + 'px',
				overflow: 'hidden',
				position: 'relative',
				...style,
			}}
		>
			{children}
		</div>
	);
};
