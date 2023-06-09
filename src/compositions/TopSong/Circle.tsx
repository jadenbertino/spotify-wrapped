interface CircleProps {
	children?: React.ReactNode;
	diameter: number;
	style?: React.CSSProperties;
}

export const Circle = ({ children, diameter, style }: CircleProps) => {
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
