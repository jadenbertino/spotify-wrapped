import { AbsoluteFill, useVideoConfig } from 'remotion'
import { Gradient } from '../../components/Gradient'

export const TopArtists = () => {
  const { height } = useVideoConfig();
  
  return (
    <AbsoluteFill>
      <Gradient height={height} />
    </AbsoluteFill>
  )
}