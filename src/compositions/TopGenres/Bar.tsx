import { CSSProperties } from 'react';

interface BarProps {
  rank: number;
  genre: string;
  style?: CSSProperties;
}

const BAR_HEIGHT = 240

export const Bar = ({ style, rank, genre }: BarProps) => {
  return (
    <div className='bar-wrapper' style={{
      display: 'flex',
      alignItems: 'center',
      color: '#fff',
    }}>
      <div style={{
        height: `${BAR_HEIGHT}px`,
        borderRadius: `${BAR_HEIGHT / 2}px`,
        backgroundColor: '#fff',
        marginTop: '16px',
        boxShadow: '0 0 4px rgba(0, 0, 0, 0.3)',
        width: '100%',
        ...style,
      }}></div>

      <p style={{ 
        margin: '0',
        marginLeft: '32px',
        fontSize: '40px',
        lineHeight: 1.5,
        textShadow: '0 0 4px rgba(0, 0, 0, 0.3)',
      }}>
        #{rank}<br />{genre}
      </p>
    </div>
  )
}