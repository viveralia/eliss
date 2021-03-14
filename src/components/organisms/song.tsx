import { FC } from "react";
import SpotifyPlayer from "react-spotify-player";

export interface SongProps {
  spotifyUri: string;
}

const Song: FC<SongProps> = ({ spotifyUri }) => {
  return (
    <SpotifyPlayer
      uri={spotifyUri}
      size={{ height: 80, width: "100%" }}
      view="coverart"
      theme="black"
    />
  );
};

export default Song;
