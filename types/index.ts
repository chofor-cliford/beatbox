interface SongAttributes {
    artwork: { url: string };
    name: string;
    albumName: string;
  }
  
  interface Song {
    title: string;
    artist: string;
    images?: { coverart: string };
    attributes?: SongAttributes;
    key?: string;
    subtitle?: string;
  }
  
  interface MusicPlayerProps {
    song: Song;
    i: number;
    artistId?: string;
    isPlaying: boolean;
    activeSong: Song;
    handlePauseClick: () => void;
    handlePlayClick: (song: Song, i: number) => void;
}

interface PlayPauseProps {
    isPlaying: boolean;
    activeSong: Song;
    song: Song;
    handlePause: () => void;
    handlePlay: () => void;
  }
  
  interface ControlsProps {
    isPlaying: boolean;
    repeat: boolean;
    setRepeat: (value: boolean) => void;
    shuffle: boolean;
    setShuffle: (value: boolean) => void;
    currentSongs: any[]; // Adjust the type according to your song structure
    handlePlayPause: () => void;
    handlePrevSong: () => void;
    handleNextSong: () => void;
  }

  interface ControlsProps {
    isPlaying: boolean;
    isActive: boolean;
    repeat: boolean;
    setRepeat: (value: boolean) => void;
    shuffle: boolean;
    setShuffle: (value: boolean) => void;
    currentSongs: any[]; // Adjust the type according to your song structure
    handlePlayPause: () => void;
    handlePrevSong: () => void;
    handleNextSong: () => void;
  }

  interface PlayerProps {
    activeSong: any; // Adjust the type according to your song structure
    volume: number;
    isPlaying: boolean;
    seekTime: number;
    repeat: boolean;
    currentIndex: number;
    onEnded: () => void;
    onTimeUpdate: (event: React.SyntheticEvent<HTMLAudioElement>) => void;
    onLoadedData: (event: React.SyntheticEvent<HTMLAudioElement>) => void;
  }
  
  interface SeekbarProps {
    value: number;
    min: string;
    max: number;
    onInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
    setSeekTime: (value: number) => void;
    appTime: number;
  }
  
  interface TrackProps {
    isPlaying: boolean;
    isActive: boolean;
    activeSong: any; // Adjust the type according to your song structure
  }
  
  interface VolumeBarProps {
    value: number;
    min: string;
    max: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    setVolume: (value: number) => void;
  }

  