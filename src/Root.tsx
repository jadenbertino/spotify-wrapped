import { Composition } from 'remotion';
import { Main } from './compositions/Main';
import { TopArtists } from './compositions/TopArtists';
import { TopGenres } from './compositions/TopGenres';
import { TopSong } from './compositions/TopSong';

const fps = 30;
const width = 1080;
const height = 1920;

export const RemotionRoot = () => {
	return (
		<>
			<Composition
				id="Main"
				component={Main}
				width={width}
				height={height}
				durationInFrames={(10 + 25) * fps}
				fps={fps}
			/>
			<Composition
				id="TopArtists"
				component={TopArtists}
				width={width}
				height={height}
				durationInFrames={10 * fps}
				fps={fps}
			/>
			<Composition
				id="TopSong"
				component={TopSong}
				width={width}
				height={height}
				durationInFrames={10 * fps}
				fps={fps}
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
