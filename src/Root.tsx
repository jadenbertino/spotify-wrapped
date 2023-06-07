import { Composition } from 'remotion';
import { Scene3 } from './TopSong';

export const RemotionRoot: React.FC = () => {
	const fps = 30;
	const width = 1080;
	const height = 1920;
	return (
		<>
			<Composition
				id="scene3"
				component={Scene3}
				width={width}
				height={height}
				durationInFrames={10 * fps}
				fps={fps}
			/>
		</>
	);
};
