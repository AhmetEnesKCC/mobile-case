import { videoUtil } from "@/utils";
import { useVideoPlayer, VideoView } from "expo-video";
import React, { useEffect, useState } from "react";
import { Button, View } from "react-native";

type PropsType = {
  value: CropFormType["video"];
  onChange: (params: CropFormType["video"]) => void;
};

const VideoInput = (props: PropsType) => {
  const [value, setValue] = useState<CropFormType["video"] | null>(null);

  const handlePickVideo = async () => {
    const asset = await videoUtil.pickVideo();
    if (asset.success && asset.data?.uri) {
      setValue({ uri: asset.data?.uri, duration: 0 });
    } else {
      console.log("error when picking video");
    }
  };

  const player = useVideoPlayer(props.value, (p) => {
    console.log(p.duration);
  });

  useEffect(() => {
    if (value) {
      // In simulator duration comes 0 so i used hard coded 30 here
      props.onChange({ uri: value.uri, duration: 30 });
      player.play();
    }
  }, [value, player]);

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
