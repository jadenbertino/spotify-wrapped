import { Composition } from 'remotion';
import { TopSong } from './TopSong';
import albumCover from './TopSong/cover.jpeg';

export const RemotionRoot = () => {
	const fps = 30;
	const width = 1080;
	const height = 1920;
	return (
		<>
			<Composition
				id="TopSong"
				component={TopSong}
				width={width}
				height={height}
				durationInFrames={10 * fps}
				fps={fps}
				defaultProps={{
					song: 'Time',
					artist: 'Free Nationals',
					cover: albumCover,
				}}
			/>
		</>
	);
};
