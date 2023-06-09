import { AbsoluteFill, useVideoConfig } from 'remotion';
import { Title } from '../../components/Title';
import { Bar } from './Bar';

export const TopGenres = () => {
  const { width } = useVideoConfig();

  return (
    <AbsoluteFill style={{
      backgroundColor: "#d4158e", 
    }}>
      <Title style={{ top: '240px' }}>Your top genres were</Title>
      <div className='bars' style={{ marginTop: 440}}>
        <Bar style={{
          backgroundColor: '#b2fef6',
        }} 
        endWidth={width * 0.60}
        rank={1}
        genre={"Rap"} />
        <Bar style={{
          backgroundColor: '#d5f872',
        }} 
        endWidth={width * 0.54}
        rank={2}
        genre={"Pop"} />
        <Bar style={{
          backgroundColor: '#4e01f8',
        }}
        endWidth={width * 0.48}
        rank={3}
        genre={"Underground Hip Hop"} />
        <Bar style={{
          backgroundColor: '#1d1416',
        }}
        endWidth={width * 0.42}
        rank={4}
        genre={"Alternative R&B"} />
        <Bar style={{
          backgroundColor: '#fefefe',
        }}
        endWidth={width * 0.36}
        rank={5}
        genre={"Neo Soul"} />
      </div>
    </AbsoluteFill>
  )
}