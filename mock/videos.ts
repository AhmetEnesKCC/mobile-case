import { VideoListType, VideoType } from "@/types/video";
import { faker } from "@faker-js/faker";

const mockVideos: VideoListType = [];

// Adding 10 mock video
for (let i = 0; i < 10; i++) {
  const video: VideoType = {
    id: faker.string.uuid(),
    description: faker.string.alpha({ length: 20 }),
    name: faker.music.songName(),
    uri: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  };
  mockVideos.push(video);
}

export default mockVideos;
