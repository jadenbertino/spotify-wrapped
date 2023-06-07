import React from 'react';
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from 'remotion';

export const Gradient: React.FC<{
	height: number;
}> = ({ height }) => {
	const frame = useCurrentFrame();
	const { fps } = useVideoConfig();

	const scrollDuration = 3 * fps;
	const yOffset = (height / 2) * (frame / scrollDuration);

	return (
		<>
			<AbsoluteFill
				style={{
					background:
						'linear-gradient(to bottom, #92a77d, #ccd56a, #e6b417, #e37e10, #dc2407, #470905, #090416, #2f0199, #736bdb, #adc1d3, #aecdbf, #92a77d)',
					height: height * 1.5,
					transform: `translateY(-${yOffset}px)`,
				}}
			></AbsoluteFill>
			<AbsoluteFill
				style={{
					background:
						'linear-gradient(to bottom, #92a77d, #ccd56a, #e6b417, #e37e10, #dc2407, #470905, #090416, #2f0199, #736bdb, #adc1d3, #aecdbf, #92a77d)',
					height: height * 1.5,
					top: height * 1.5 - 1,
					transform: `translateY(-${yOffset}px)`,
				}}
			></AbsoluteFill>
		</>
	);
};
