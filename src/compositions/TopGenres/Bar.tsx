import { CSSProperties } from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

const BAR_HEIGHT = 240
const TOTAL_RANKS = 5

interface BarProps {
  rank: number;
  genre: string;
  style?: CSSProperties;
  endWidth: number;
}

export const Bar = ({ style, rank, genre, endWidth }: BarProps) => {
  const { fps, width } = useVideoConfig();
  const frame = useCurrentFrame();

  const opacityDelay = (TOTAL_RANKS - rank) * 3 + 10
  const opacity = interpolate(frame - opacityDelay, [0, 8], [0, 1]);

  const barSpring = spring({
    frame: frame - (rank * 3) - 30,
    fps,
    config: {
      damping: 200
    }
  })
  const leftStart = (width - BAR_HEIGHT) / 2;
  const leftOffset = interpolate(
    barSpring, 
    [0, 1],
    [leftStart, -BAR_HEIGHT / 2],
  )

  const barWidth = interpolate(barSpring, [0, 1], [BAR_HEIGHT, endWidth])

  return (
    <div className='bar-wrapper' style={{
      display: 'flex',
      alignItems: 'center',
      color: '#fff',
      width: width * 2,
    }}>
      <div style={{
        height: `${BAR_HEIGHT}px`,
        borderRadius: `${BAR_HEIGHT / 2}px`,
        backgroundColor: '#fff',
        marginTop: '16px',
        boxShadow: '0 0 4px rgba(0, 0, 0, 0.3)',
        width: `${barWidth}px`,
        opacity: opacity,
        marginLeft: leftOffset,
        ...style,
      }}></div>

      <p style={{ 
        margin: '0',
        marginLeft: '32px',
        fontSize: '40px',
        lineHeight: 1.5,
        textShadow: '0 0 4px rgba(0, 0, 0, 0.3)',
        opacity: 0,
      }}>
        #{rank}<br />{genre}
      </p>
    </div>
  )
}