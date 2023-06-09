import {
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import { Album } from './Album';
import { Circle } from './Circle';
import { Gradient } from './Gradient';

interface CircleCoverProps {
  cover: string;
}

export const CircleAndAlbum = ({ cover }: CircleCoverProps) => {
	const frame = useCurrentFrame();
	const { fps, width, height } = useVideoConfig();

	const circleSpring = spring({
		fps,
		frame,
		config: {
			damping: 200,
      mass: 1.2
		},
	});
	const circleDiameter = width / 1.5;
	const circleOpacity = interpolate(frame, [0, 10], [0, 1]);
	const circleScale = interpolate(circleSpring, [0, 1], [4, 1]);
	const coverSize = width / 2;
	const coverOpacity = interpolate(circleSpring, [0.8, 1], [0.5, 1]);
	const coverScale = interpolate(circleSpring, [0.9, 1], [0.7, 1]);

	return (
		<>
			<Circle
				diameter={circleDiameter}
				style={{
					position: 'absolute',
					left: `${(width - circleDiameter) / 2}px`,
					top: `${(height - circleDiameter) / 2}px`,
					transform: `scale(${circleScale})`,
					opacity: circleOpacity,
				}}
			>
				<Gradient height={500} />
			</Circle>
			<div
				style={{
					position: 'absolute',
					left: `${(width - coverSize) / 2}px`,
					top: `${(height - coverSize) / 2}px`,
					transform: `scale(${coverScale})`,
					opacity: coverOpacity,
				}}
			>
				<Album size={coverSize} cover={cover} />
			</div>
		</>
	);
};