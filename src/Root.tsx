import { Composition } from 'remotion';
import { Gradient } from './components/Gradient';
import { Scene3 } from './compositions/Scene3';

export const RemotionRoot: React.FC = () => {
	const fps = 30;
	const width = 1080;
	const height = 1920;
	return (
		<>
			<Composition
				id="gradient"
				component={Gradient}
				width={width}
				height={height}
				durationInFrames={4 * fps}
				fps={fps}
			/>
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
