import ScreenWrapper from "@/components/container/screen-wrapper";
import VideoCards from "@/components/home/video-cards";
import { useNavigation } from "expo-router";
import React from "react";
import { Button, Text } from "react-native";

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleNewCrop = () => {
    navigation.navigate("modal" as never);
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
