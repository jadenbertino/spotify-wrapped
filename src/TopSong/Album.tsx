import React from 'react';

export const Album: React.FC<{ size: number; cover: string; }> = ({ size, cover }) => {
	return (
		<div
			style={{
				width: size,
				height: size,
        boxShadow: "0 0 12px rgba(0, 0, 0, 0.4)",
        borderRadius: "8px",
        overflow: "hidden",
			}}
		>
			<img src={cover} style={{
        width: size,
        height: size,
        objectFit: 'contain',
      }}/>
		</div>
	);
};