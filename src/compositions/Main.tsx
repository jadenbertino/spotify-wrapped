import { Sequence, useVideoConfig } from 'remotion'
import { TopGenres } from './TopGenres';
import { TopSong } from './TopSong'

export const Main = () => {
  const { fps }  = useVideoConfig();

  const TopSongLength = 10 * fps;
  const TopGenresLength = 15 * fps;

  return (
    <>
    <Sequence from={0} durationInFrames={TopSongLength}>
      <TopSong />
    </Sequence>
    <Sequence from={TopSongLength} durationInFrames={TopGenresLength}>
      <TopGenres />
    </Sequence>
    </>
  )
}