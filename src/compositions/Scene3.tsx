import React from 'react';
import {
	AbsoluteFill,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import { Circle } from '../components/Circle';
import { Gradient } from '../components/Gradient';
import { Album } from '../components/Album';

export const Scene3: React.FC = () => {
	const frame = useCurrentFrame();
	const { fps } = useVideoConfig();
	const progress = spring({
		fps,
		frame,
		config: {
			damping: 200,
		},
	});
	const scale = interpolate(progress, [0, 1], [4, 1]);

	return (
		<AbsoluteFill style={{ backgroundColor: '#4e01f8' }}>
			<Circle
				diameter={500}
				style={{
					left: '50%',
					top: '55%',
					transform: `translate(-50%, -50%) scale(${scale})`,
					opacity: progress,
				}}
			>
				<Gradient height={500} />
			</Circle>
      <Album />
		</AbsoluteFill>
	);
};
