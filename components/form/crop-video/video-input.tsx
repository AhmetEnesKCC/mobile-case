import { videoUtil } from "@/utils";
import { useVideoPlayer, VideoView } from "expo-video";
import React, { useEffect } from "react";
import { Button, View } from "react-native";

type PropsType = {
  value: string | null;
  onChange: (uri: string) => void;
};

const VideoInput = (props: PropsType) => {
  const handlePickVideo = async () => {
    const asset = await videoUtil.pickVideo();
    if (asset.success && asset.data?.uri) {
      props.onChange(asset.data?.uri);
    } else {
      console.log("error when picking video");
    }
  };

  const player = useVideoPlayer(props.value);

  useEffect(() => {
    if (props.value) {
      player.play();
    }
  }, [props.value, player]);

  return (
    <View className="w-full aspect-video border-[1px] border-gray-500 rounded-xl items-center justify-center">
      {props.value && (
        <VideoView
          player={player}
          style={{
            width: "100%",
            flex: 1,
          }}
        ></VideoView>
      )}

      <Button
        onPress={handlePickVideo}
        title={!props.value ? "Select Video" : "Change Video"}
      />
    </View>
  );
};

export default VideoInput;
