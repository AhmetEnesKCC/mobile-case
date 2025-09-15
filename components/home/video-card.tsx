import { VideoType } from "@/types/video";
import { Feather } from "@expo/vector-icons";
import { useEvent } from "expo";
import { useRouter } from "expo-router";
import { useVideoPlayer, VideoView } from "expo-video";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { CText } from "../common/text";

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

  const router = useRouter();

  return (
    <View className="border-[1px]   rounded-xl overflow-hidden ">
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
      <View className="flex-1 gap-5 mt-6">
        <VideoView
          style={{
            width: "100%",
            aspectRatio: 16 / 9,
          }}
          player={player}
        />
        <TouchableOpacity
          onPress={() => {
            router.push(("/details/" + video.id) as never);
          }}
          className=""
        >
          <CText className="text-blue-500">
            Go to Details <Feather name="external-link" />
          </CText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default VideoCard;
