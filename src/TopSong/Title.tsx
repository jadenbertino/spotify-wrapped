import React, { CSSProperties } from 'react';

export const Title: React.FC<{
	children: React.ReactNode;
	style: CSSProperties;
}> = ({ children, style }) => {
	return (
		<div
			style={{
				color: 'white',
				fontSize: '72px',
				fontWeight: '600',
				textAlign: 'center',
				position: 'absolute',
				width: '100%',
				top: '350px',
				textShadow: '0 0 6px rgba(0, 0, 0, 0.5)',
        ...style
			}}
		>
			{children}
		</div>
	);
};
