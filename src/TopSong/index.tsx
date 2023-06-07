import React from 'react';
import {
	AbsoluteFill,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import { Album } from './Album';
import { Circle } from './Circle';
import { Gradient } from './Gradient';
import { Title } from './Title';
import albumCover from './cover.jpeg'

export const Scene3: React.FC<{
	song: string;
	artist: string;
  cover: string;
  // audio?:
}> = ({ song = 'Time', artist = 'Free Nationals', cover = albumCover }) => {
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

  const titleSpring = spring({
    fps,
    frame: frame - 10,
    config: {
      damping: 200,
    },
  })

	const upAnimationDelay = 90;
	const upSpring = spring({
		frame: frame - upAnimationDelay,
		fps,
		config: {
			damping: 200,
		},
	});
	const upAnimation = interpolate(upSpring, [0, 1], [0, -150]);

	const textOpacity = (() => {
		if (frame < upAnimationDelay) {
			return interpolate(titleSpring, [0.95, 1], [0.3, 1]);
		}
		return interpolate(upSpring, [0, 1], [1, 0]);
	})();

  const songOpacity = spring({
    frame: frame - upAnimationDelay - 15,
    fps,
    config: {
      damping: 200,
    },
  })

  const artistOpacity = spring({
    frame: frame - upAnimationDelay - 30,
    fps,
    config: {
      damping: 200,
    },
  })

	return (
		<AbsoluteFill style={{ backgroundColor: '#4e01f8' }}>
			<AbsoluteFill
				style={{
					transform: `translateY(${upAnimation}px)`,
				}}
			>
				<Title style={{ opacity: textOpacity }}>
					One song helped you get <br /> through it all
				</Title>
				<Title style={{ top: '72%', fontSize: '48px', padding: '0 10%', opacity: artistOpacity }}>
					{artist}
				</Title>
        <Title style={{ top: '80%', fontSize: '72px', padding: '0 10%', opacity: songOpacity }}>
					Your top song of the year is {song}.
				</Title>
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
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
