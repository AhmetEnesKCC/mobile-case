import { CText } from "@/components/common/text";
import ScreenWrapper from "@/components/container/screen-wrapper";
import { useVideoStore } from "@/store/stores/video.store";
import { useSearchParams } from "expo-router/build/hooks";
import { useVideoPlayer, VideoView } from "expo-video";
import React from "react";

const VideoDetailScreen = () => {
  const params = useSearchParams();
  const getVideo = useVideoStore((s) => s.getVideo);
  const video = getVideo(params.get("id") ?? "");
  const player = useVideoPlayer(video?.uri);
  return (
    <ScreenWrapper>
      <VideoView
        style={{
          width: "100%",
          aspectRatio: 16 / 9,
        }}
        player={player}
      ></VideoView>
      <CText className="text-3xl font-bold opacity-40 mt-5">Name</CText>
      <CText className="text-xl">{video?.name}</CText>
      <CText className="text-3xl font-bold opacity-40 mt-10">Description</CText>
      <CText>
        <CText className="text-xl">{video?.description}</CText>
      </CText>
    </ScreenWrapper>
  );
};

export default VideoDetailScreen;
