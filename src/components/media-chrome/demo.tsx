import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ReloadWrapper } from "../reload-wrapper";
import {
  MediaController,
  MediaControlBar,
  MediaTimeRange,
  MediaTimeDisplay,
  MediaVolumeRange,
  MediaPlayButton,
  MediaSeekBackwardButton,
  MediaSeekForwardButton,
  MediaMuteButton,
  MediaPosterImage,
  MediaPlaybackRateButton,
  MediaPipButton,
  MediaFullscreenButton,
} from "media-chrome/react";

const SimplePlayer = () => {
  return (
    <ReloadWrapper className="p-4 flex justify-center rounded-lg">
      <MediaController className="w-[640px] relative rounded-lg border-2 border-black ">
        <div className="flex w-full items-center justify-start gap-2 absolute top-4 left-6">
          <Avatar>
            <AvatarImage src="https://github.com/BroKarim.png" />
            <AvatarFallback>Kris Tyson</AvatarFallback>
          </Avatar>
          <h2 className="text-white font-mono">PROOF THE EARTH IS TRIANGLE</h2>
          {/* <MediaTextDisplay className=" bg-none" background="yellow" slot="top-chrome">
            Tess
          </MediaTextDisplay> */}
        </div>
        <video slot="media" src="https://videos.pexels.com/video-files/2695085/2695085-hd_1920_1080_30fps.mp4" preload="auto" muted crossOrigin="" />
        <MediaPosterImage
          slot="poster"
          className="w-full h-full object-fit"
          src="https://images.unsplash.com/photo-1498066534384-8b6a352543b0?q=80&w=3082&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ></MediaPosterImage>
        <MediaControlBar>
          <MediaPlayButton></MediaPlayButton>
          <MediaSeekBackwardButton></MediaSeekBackwardButton>
          <MediaSeekForwardButton></MediaSeekForwardButton>
          <MediaTimeRange></MediaTimeRange>
          <MediaTimeDisplay showDuration></MediaTimeDisplay>
          <MediaMuteButton></MediaMuteButton>
          <MediaPlaybackRateButton></MediaPlaybackRateButton>
          <MediaPipButton></MediaPipButton>
          <MediaFullscreenButton></MediaFullscreenButton>
          <MediaVolumeRange></MediaVolumeRange>
        </MediaControlBar>
      </MediaController>
    </ReloadWrapper>
  );
};

export default SimplePlayer;
