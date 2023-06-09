import { Composition } from 'remotion';
import { Main } from './compositions/Main';
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
		</>
	);
};
