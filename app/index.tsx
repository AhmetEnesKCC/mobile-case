import ScreenWrapper from "@/components/container/screen-wrapper";
import VideoCards from "@/components/home/video-cards";
import { useRouter } from "expo-router";
import React from "react";
import { Button, Text } from "react-native";

const HomeScreen = () => {
  const router = useRouter();

  const handleNewCrop = () => {
    router.push("/crop.modal");
  };

  return (
    <ScreenWrapper className="">
      <Button title="New Crop" onPress={handleNewCrop}></Button>
      <Text className="text-xl text-white font-bold">Crops</Text>
      <VideoCards />
    </ScreenWrapper>
  );
};

export default HomeScreen;
