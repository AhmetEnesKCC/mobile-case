import { VideoType } from "@/types/video";
import { Feather } from "@expo/vector-icons";
import { useEvent } from "expo";
import { useVideoPlayer, VideoView } from "expo-video";
import React from "react";
import { TouchableOpacity, View } from "react-native";

type PropsType = {
  video: VideoType;
};

const VideoCard = ({ video }: PropsType) => {
  const player = useVideoPlayer(video.uri, (player) => {
    player.loop = true;
    player.muted = true;
  });

  const { isPlaying } = useEvent(player, "playingChange", {
    isPlaying: player.playing,
  });

  return (
    <View className="border-[1px] aspect-video rounded-xl overflow-hidden ">
      {!isPlaying && (
        <TouchableOpacity
          onPress={() => {
            player.play();
          }}
          className="bg-white/20 items-center justify-center w-full h-full absolute z-[4]"
        >
          <Feather name="play" size={48} color={"white"} />
        </TouchableOpacity>
      )}
      <VideoView
        style={{
          width: "100%",
          height: "100%",
        }}
        player={player}
      />
    </View>
  );
};

export default VideoCard;
