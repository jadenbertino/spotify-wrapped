import { Composition } from 'remotion';
import { TopGenres } from './compositions/TopGenres';
import { TopSong } from './compositions/TopSong';
import albumCover from './compositions/TopSong/cover.jpeg';

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
			<Composition
				id="TopGenres"
				component={TopGenres}
				width={width}
				height={height}
				durationInFrames={15 * fps}
				fps={fps}
			/>
		</>
	);
};
