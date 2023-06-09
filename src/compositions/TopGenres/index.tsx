import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { Title } from '../../components/Title';
import { Bar } from './Bar';

const TITLE_OFFSET = 240;
const TITLE_FONT_SIZE = 72;

export const TopGenres = () => {
  const frame = useCurrentFrame();
  const { width, fps, height } = useVideoConfig();

  const upSpring = spring({
    frame: frame - 15,
    fps,
    config: {
      damping: 200,
      mass: 2,
    },
  })

  const upAnimation = interpolate(
    upSpring,
    [0, 1],
    [(height - TITLE_OFFSET - TITLE_FONT_SIZE) / 2, 0]
  )
  
  return (
    <AbsoluteFill style={{
      backgroundColor: "#d4158e", 
    }}>
      <AbsoluteFill style={{
        transform: `translateY(${upAnimation}px)`
      }}>
        <Title style={{ top: TITLE_OFFSET, lineHeight: 1, fontSize: TITLE_FONT_SIZE}}>Your top genres were</Title>
        <div className='bars' style={{ marginTop: 420}}>
          <Bar 
            style={{backgroundColor: '#b2fef6',}}
            endWidth={width * 0.60}
            rank={1}
            genre={"Rap"} 
          />
          <Bar 
            style={{ backgroundColor: '#d5f872', }}
            endWidth={width * 0.54}
            rank={2}
            genre={"Pop"}
          />
          <Bar 
            style={{ backgroundColor: '#4e01f8', }}
            endWidth={width * 0.48}
            rank={3}
            genre={"Underground Hip Hop"}
          />
          <Bar style={{ backgroundColor: '#1d1416', }}
            endWidth={width * 0.42}
            rank={4}
            genre={"Alternative R&B"}
          />
          <Bar style={{ backgroundColor: '#fefefe', }}
            endWidth={width * 0.36}
            rank={5}
            genre={"Neo Soul"}
          />
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  )
}