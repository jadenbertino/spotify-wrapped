import {
	AbsoluteFill,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import { Title } from '../../components/Title';
import { CircleAndAlbum } from './CircleAndAlbum';

interface TopSongProps {
	song: string;
	artist: string;
  cover: string;
}

export const TopSong = ({ song, artist, cover }: TopSongProps) => {
	const frame = useCurrentFrame();
	const { fps } = useVideoConfig();

  const topTitleSpring = spring({
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

	const topTextOpacity = (() => {
		if (frame < upAnimationDelay) {
			return interpolate(topTitleSpring, [0.95, 1], [0.3, 1]);
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
				<Title style={{ opacity: topTextOpacity, top: '350px' }}>
					One song helped you get <br /> through it all
				</Title>
        <CircleAndAlbum cover={cover}/>
				<Title style={{ top: '72%', fontSize: '48px', padding: '0 10%', opacity: artistOpacity }}>
					{artist}
				</Title>
        <Title style={{ top: '80%', fontSize: '72px', padding: '0 10%', opacity: songOpacity }}>
					Your top song of the year is {song}.
				</Title>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
