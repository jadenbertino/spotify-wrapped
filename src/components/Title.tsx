import { CSSProperties } from 'react';

interface TitleProps {
	children: React.ReactNode;
	style?: CSSProperties;
}

export const Title = ({ children, style }: TitleProps) => {
	return (
		<div
			style={{
				color: 'white',
				fontSize: '72px',
				fontWeight: '600',
				textAlign: 'center',
				position: 'absolute',
				width: '100%',
				textShadow: '0 0 6px rgba(0, 0, 0, 0.5)',
        ...style
			}}
		>
			{children}
		</div>
	);
};
