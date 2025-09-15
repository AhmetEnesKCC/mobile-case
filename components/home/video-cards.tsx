import mockVideos from "@/mock/videos";
import { useVideoStore } from "@/store/stores/video.store";
import React from "react";
import { FlatList } from "react-native";
import VideoCard from "./video-card";

const VideoCards = () => {
  const videos = useVideoStore((s) => s.videos);
  return (
    <FlatList
      className="w-full "
      contentContainerClassName="gap-6"
      data={[...videos, ...mockVideos]}
      keyExtractor={({ id }) => String(id)} // If autoincrement id chosen the key should be string, so converted it to string
      renderItem={({ item }) => <VideoCard video={item} />}
    />
  );
};

export default VideoCards;
